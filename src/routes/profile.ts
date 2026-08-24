import { Router } from 'express';
import axios from 'axios';
import { cache } from '../services/cache';

const router = Router();

// Proxy LeetCode's public GraphQL API to avoid CORS with a 10-minute TTL cache
router.get('/leetcode/:username', async (req, res) => {
  const { username } = req.params;
  const cacheKey = `leetcode:${username.toLowerCase()}`;

  // 1. Check in-memory cache
  const cached = cache.get<any>(cacheKey);
  if (cached) {
    return res.json(cached);
  }

  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        profile {
          ranking
          reputation
          starRating
        }
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
        userCalendar {
          streak
          totalActiveDays
        }
        badges {
          id
          displayName
          icon
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      'https://leetcode.com/graphql',
      { query, variables: { username } },
      {
        headers: {
          'Content-Type': 'application/json',
          'Referer': 'https://leetcode.com',
          'User-Agent': 'Mozilla/5.0 (compatible; portfolio-dashboard/1.0)',
        },
        timeout: 8000,
      }
    );

    const user = response.data?.data?.matchedUser;
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const acStats = user.submitStats?.acSubmissionNum || [];
    const allSolved  = acStats.find((s: any) => s.difficulty === 'All')?.count || 0;
    const easySolved = acStats.find((s: any) => s.difficulty === 'Easy')?.count || 0;
    const medSolved  = acStats.find((s: any) => s.difficulty === 'Medium')?.count || 0;
    const hardSolved = acStats.find((s: any) => s.difficulty === 'Hard')?.count || 0;

    const payload = {
      username: user.username,
      ranking: user.profile?.ranking || 0,
      reputation: user.profile?.reputation || 0,
      solved: { total: allSolved, easy: easySolved, medium: medSolved, hard: hardSolved },
      streak: user.userCalendar?.streak || 0,
      activeDays: user.userCalendar?.totalActiveDays || 0,
      badges: (user.badges || []).slice(0, 6).map((b: any) => b.displayName),
    };

    // Store in cache with 10-minute TTL (600,000 ms)
    cache.set(cacheKey, payload, 10 * 60 * 1000);

    res.json(payload);
  } catch (err: any) {
    console.error('LeetCode API error:', err?.message);
    res.status(502).json({ error: 'Failed to fetch LeetCode data', message: err?.message });
  }
});

export default router;
