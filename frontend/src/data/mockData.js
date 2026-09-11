// Mock data for static deployment (when backend API is unavailable)

export const MOCK_FEED = [
  {
    id: '1',
    type: 'commit',
    source: 'github',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    data: {
      message: 'feat: Add real-time telemetry dashboard with retro UI',
      repo: 'obsolescence-protocol',
      commits: 3,
      language: 'TypeScript'
    }
  },
  {
    id: '2',
    type: 'issue',
    source: 'leetcode',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    data: {
      title: 'Solved: Two Sum',
      number: 1,
      difficulty: 'Medium',
      runtime: '52ms',
      language: 'Python'
    }
  },
  {
    id: '3',
    type: 'music',
    source: 'spotify',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    data: {
      track_name: 'Nightcall',
      artist: 'Kavinsky',
      album: 'Drive (Original Soundtrack)',
      youtubeId: 'MV_3Dpw-BRY'
    }
  },
  {
    id: '4',
    type: 'commit',
    source: 'github',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    data: {
      message: 'feat: Add Dynamic Island morphing animations',
      repo: 'nimbus-macos',
      commits: 5,
      language: 'Swift'
    }
  },
  {
    id: '5',
    type: 'music',
    source: 'spotify',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    data: {
      track_name: 'Resonance',
      artist: 'HOME',
      album: 'Odyssey',
      youtubeId: '8GW6sLrK40k'
    }
  },
  {
    id: '6',
    type: 'issue',
    source: 'leetcode',
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    data: {
      title: 'Solved: Binary Tree Level Order Traversal',
      number: 102,
      difficulty: 'Medium',
      runtime: '48ms',
      language: 'Python'
    }
  },
  {
    id: '7',
    type: 'workout',
    source: 'strava',
    timestamp: new Date(Date.now() - 48 * 60 * 60 * 1000).toISOString(),
    data: {
      sport_type: 'Cycling',
      distance: 15000,
      moving_time: 2700,
      elevation_gain: 120
    }
  },
  {
    id: '8',
    type: 'sleep',
    source: 'oura',
    timestamp: new Date(Date.now() - 60 * 60 * 60 * 1000).toISOString(),
    data: {
      duration: 28800,
      score: 88,
      efficiency: 92,
      deep_sleep: 7200
    }
  }
]

export const MOCK_SOURCES = [
  {
    id: 'github',
    name: 'GitHub',
    type: 'code',
    enabled: true,
    icon: 'code',
    color: '#81b29a'
  },
  {
    id: 'leetcode',
    name: 'LeetCode',
    type: 'code',
    enabled: true,
    icon: 'psychology',
    color: '#d4a373'
  },
  {
    id: 'spotify',
    name: 'Spotify',
    type: 'music',
    enabled: true,
    icon: 'music_note',
    color: '#e07a5f'
  },
  {
    id: 'strava',
    name: 'Strava',
    type: 'fitness',
    enabled: true,
    icon: 'directions_run',
    color: '#81b29a'
  },
  {
    id: 'oura',
    name: 'Oura Ring',
    type: 'health',
    enabled: true,
    icon: 'bed',
    color: '#d4a373'
  }
]

export const MOCK_STATS = {
  totalActivities: 840,
  commitCount: 186,
  problemsSolved: 52,
  tracksListened: 3649,
  hoursTracked: 2150
}
