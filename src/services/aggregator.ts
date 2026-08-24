import { FeedQuery, FeedResponse, LifeEvent } from '../types';
import { getAllSources } from './sources';
import { generateMockEvents } from './mockData';
import { cache } from './cache';

export async function aggregateFeed(query: FeedQuery): Promise<FeedResponse> {
  const cacheKey = JSON.stringify({
    from: query.from?.toISOString(),
    to: query.to?.toISOString(),
    sources: query.sources?.sort(),
    limit: query.limit,
    search: query.search,
    type: query.type,
    sort: query.sort,
    demo: query.demo,
  });

  const cached = cache.get<FeedResponse>(cacheKey);
  if (cached && !query.demo) {
    return cached;
  }

  const allSources = getAllSources();
  let isDemoUsed = Boolean(query.demo);

  // If demo is explicitly requested, generate mock events
  let feed: LifeEvent[] = [];

  if (isDemoUsed) {
    feed = generateMockEvents(query);
  } else {
    // Filter sources based on query
    const sources = query.sources
      ? allSources.filter(s => {
          const isEnabled = typeof s.enabled === 'function' ? s.enabled() : s.enabled;
          return query.sources!.includes(s.name) && isEnabled;
        })
      : allSources.filter(s => typeof s.enabled === 'function' ? s.enabled() : s.enabled);

    const fetchPromises = sources.map(async (source) => {
      try {
        return await source.fetch(query);
      } catch (error) {
        console.error(`Error fetching from ${source.name}:`, error);
        return [];
      }
    });

    const results = await Promise.all(fetchPromises);
    feed = results.flat();

    // Fallback: if no live items returned from any configured source (e.g. credentials not set or no recent events), inject mock events
    if (feed.length === 0) {
      isDemoUsed = true;
      feed = generateMockEvents(query);
    }
  }

  // Apply source filtering if specified
  if (query.sources && query.sources.length > 0) {
    feed = feed.filter(item => query.sources!.includes(item.source));
  }

  // Apply event type filtering if specified
  if (query.type) {
    feed = feed.filter(item => item.type === query.type);
  }

  // Apply text search filtering if specified
  if (query.search) {
    const term = query.search.toLowerCase();
    feed = feed.filter(item => {
      const dataStr = JSON.stringify(item.data).toLowerCase();
      return (
        item.source.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        dataStr.includes(term)
      );
    });
  }

  // Sort by timestamp
  const sortDirection = query.sort === 'asc' ? 1 : -1;
  feed.sort((a, b) => sortDirection * (b.timestamp.getTime() - a.timestamp.getTime()));

  // Apply limit
  if (query.limit && query.limit > 0) {
    feed = feed.slice(0, query.limit);
  }

  const response: FeedResponse = {
    feed,
    meta: {
      total: feed.length,
      from: query.from?.toISOString() || '',
      to: query.to?.toISOString() || '',
      sources: (query.sources && query.sources.length > 0) 
        ? query.sources 
        : ['github', 'spotify', 'strava', 'oura', 'rescuetime'],
      isDemo: isDemoUsed,
    },
  };

  // Cache for 3 minutes if not in explicit demo mode
  if (!query.demo) {
    cache.set(cacheKey, response, 3 * 60 * 1000);
  }

  return response;
}
