// Mock data for static deployment (when backend API is unavailable)

export const MOCK_FEED = [
  {
    id: '1',
    type: 'github_commit',
    source: 'github',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    title: 'Pushed 3 commits to obsolescence-protocol',
    description: 'feat: Add real-time telemetry dashboard with retro UI',
    metadata: {
      repo: 'obsolescence-protocol',
      commits: 3,
      language: 'TypeScript'
    }
  },
  {
    id: '2',
    type: 'leetcode_solved',
    source: 'leetcode',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    title: 'Solved: Two Sum',
    description: 'Difficulty: Medium • Runtime: 52ms • Memory: 41.2MB',
    metadata: {
      difficulty: 'Medium',
      runtime: '52ms',
      language: 'Python'
    }
  },
  {
    id: '3',
    type: 'spotify_track',
    source: 'spotify',
    timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    title: 'Listened to "Nightcall" by Kavinsky',
    description: 'Album: Drive (Original Soundtrack) • Played 3 times',
    metadata: {
      track_name: 'Nightcall',
      artist: 'Kavinsky',
      album: 'Drive (Original Soundtrack)',
      youtubeId: 'MV_3Dpw-BRY',
      coverArt: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Kavinsky_Nightcall.jpg'
    }
  },
  {
    id: '4',
    type: 'github_commit',
    source: 'github',
    timestamp: new Date(Date.now() - 12 * 60 * 60 * 1000).toISOString(),
    title: 'Pushed 5 commits to nimbus-macos',
    description: 'feat: Add Dynamic Island morphing animations',
    metadata: {
      repo: 'nimbus-macos',
      commits: 5,
      language: 'Swift'
    }
  },
  {
    id: '5',
    type: 'spotify_track',
    source: 'spotify',
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    title: 'Listened to "Resonance" by HOME',
    description: 'Album: Odyssey • Played 7 times',
    metadata: {
      track_name: 'Resonance',
      artist: 'HOME',
      album: 'Odyssey',
      youtubeId: '8GW6sLrK40k',
      coverArt: 'https://upload.wikimedia.org/wikipedia/en/8/87/Home_-_Odyssey_album_cover.png'
    }
  },
  {
    id: '6',
    type: 'leetcode_solved',
    source: 'leetcode',
    timestamp: new Date(Date.now() - 36 * 60 * 60 * 1000).toISOString(),
    title: 'Solved: Binary Tree Level Order Traversal',
    description: 'Difficulty: Medium • Runtime: 48ms • Memory: 39.8MB',
    metadata: {
      difficulty: 'Medium',
      runtime: '48ms',
      language: 'Python'
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
  }
]

export const MOCK_STATS = {
  totalActivities: 840,
  commitCount: 186,
  problemsSolved: 52,
  tracksListened: 3649,
  hoursTracked: 2150
}
