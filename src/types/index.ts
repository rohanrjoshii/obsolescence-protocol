export interface LifeEvent {
  id: string;
  type: string;
  source: string;
  timestamp: Date;
  data: Record<string, any>;
}

export interface FeedQuery {
  from?: Date;
  to?: Date;
  sources?: string[];
  limit?: number;
  search?: string;
  type?: string;
  sort?: 'asc' | 'desc';
  demo?: boolean;
}

export interface DataSource {
  name: string;
  enabled: boolean | (() => boolean);
  fetch: (query: FeedQuery) => Promise<LifeEvent[]>;
  healthCheck: () => Promise<boolean>;
}

export interface FeedResponse {
  feed: LifeEvent[];
  meta: {
    total: number;
    from: string;
    to: string;
    sources: string[];
    isDemo?: boolean;
  };
}

export interface LifeStats {
  period: {
    from: string;
    to: string;
  };
  github: {
    totalEvents: number;
    commits: number;
    pullRequests: number;
    issues: number;
    topRepos: { repo: string; count: number }[];
  };
  sleep: {
    avgDurationHours: number;
    avgEfficiency: number;
    avgScore: number;
    totalDaysTracked: number;
  };
  workouts: {
    totalWorkouts: number;
    totalDistanceKm: number;
    totalDurationMinutes: number;
    totalCalories: number;
  };
  music: {
    totalTracks: number;
    topArtists: { artist: string; count: number }[];
  };
  timeTracking: {
    totalHours: number;
    productiveHours: number;
    distractingHours: number;
    productivityScore: number;
  };
}
