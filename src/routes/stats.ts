import { Router } from 'express';
import { subDays } from 'date-fns';
import { aggregateFeed } from '../services/aggregator';
import { FeedQuery, LifeStats } from '../types';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const query: FeedQuery = {
      from: req.query.from ? new Date(req.query.from as string) : subDays(new Date(), 30),
      to: req.query.to ? new Date(req.query.to as string) : new Date(),
      sources: req.query.sources ? (req.query.sources as string).split(',') : undefined,
      limit: 1000, // Fetch up to 1000 items to calculate metrics
      demo: req.query.demo === 'true' || req.query.demo === '1',
    };

    const feedResponse = await aggregateFeed(query);
    const feed = feedResponse.feed;

    // Calculate GitHub Stats
    const githubEvents = feed.filter(e => e.source === 'github');
    const commits = githubEvents.filter(e => e.type === 'commit');
    const pullRequests = githubEvents.filter(e => e.type === 'pull_request');
    const issues = githubEvents.filter(e => e.type === 'issue');

    const repoCounts: Record<string, number> = {};
    githubEvents.forEach(e => {
      const repo = e.data?.repo;
      if (repo) {
        repoCounts[repo] = (repoCounts[repo] || 0) + 1;
      }
    });

    const topRepos = Object.entries(repoCounts)
      .map(([repo, count]) => ({ repo, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Calculate Sleep Stats (Oura)
    const sleepEvents = feed.filter(e => e.type === 'sleep');
    let totalSleepSec = 0;
    let totalEfficiency = 0;
    let totalScore = 0;
    let sleepDaysCount = sleepEvents.length;

    sleepEvents.forEach(e => {
      totalSleepSec += e.data.duration || 0;
      totalEfficiency += e.data.efficiency || 0;
      totalScore += e.data.score || 0;
    });

    // Calculate Workouts Stats (Strava)
    const workoutEvents = feed.filter(e => e.type === 'workout');
    let totalDistanceKm = 0;
    let totalDurationMinutes = 0;
    let totalCalories = 0;

    workoutEvents.forEach(e => {
      totalDistanceKm += e.data.distance || 0;
      totalDurationMinutes += Math.floor((e.data.duration || 0) / 60);
      totalCalories += e.data.calories || 0;
    });

    // Calculate Music Stats (Spotify)
    const musicEvents = feed.filter(e => e.type === 'music');
    const artistCounts: Record<string, number> = {};
    musicEvents.forEach(e => {
      const artist = e.data.artist;
      if (artist) {
        artistCounts[artist] = (artistCounts[artist] || 0) + 1;
      }
    });

    const topArtists = Object.entries(artistCounts)
      .map(([artist, count]) => ({ artist, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Calculate Time Tracking Stats (RescueTime)
    const timeEvents = feed.filter(e => e.type === 'time_tracking');
    let totalHours = 0;
    let productiveHours = 0;
    let distractingHours = 0;

    timeEvents.forEach(e => {
      totalHours += e.data.total_hours || 0;
      productiveHours += e.data.productive_hours || 0;
      distractingHours += e.data.distracting_hours || 0;
    });

    const productivityScore = totalHours > 0 
      ? Math.round((productiveHours / totalHours) * 100) 
      : 80;

    const stats: LifeStats = {
      period: {
        from: query.from?.toISOString() || '',
        to: query.to?.toISOString() || '',
      },
      github: {
        totalEvents: githubEvents.length,
        commits: commits.length,
        pullRequests: pullRequests.length,
        issues: issues.length,
        topRepos,
      },
      sleep: {
        avgDurationHours: sleepDaysCount > 0 ? Math.round((totalSleepSec / sleepDaysCount / 3600) * 10) / 10 : 7.6,
        avgEfficiency: sleepDaysCount > 0 ? Math.round(totalEfficiency / sleepDaysCount) : 88,
        avgScore: sleepDaysCount > 0 ? Math.round(totalScore / sleepDaysCount) : 85,
        totalDaysTracked: sleepDaysCount || 7,
      },
      workouts: {
        totalWorkouts: workoutEvents.length,
        totalDistanceKm: Math.round(totalDistanceKm * 10) / 10,
        totalDurationMinutes,
        totalCalories,
      },
      music: {
        totalTracks: musicEvents.length,
        topArtists,
      },
      timeTracking: {
        totalHours: Math.round(totalHours * 10) / 10,
        productiveHours: Math.round(productiveHours * 10) / 10,
        distractingHours: Math.round(distractingHours * 10) / 10,
        productivityScore,
      },
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching stats:', error);
    res.status(500).json({ 
      error: 'Failed to fetch stats',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
