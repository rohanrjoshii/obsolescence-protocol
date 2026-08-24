import { FeedQuery, LifeEvent } from '../types';
import { subHours, subDays, subMinutes } from 'date-fns';

export function generateMockEvents(query: FeedQuery): LifeEvent[] {
  const now = new Date();
  const events: LifeEvent[] = [];

  // GitHub Commits & Activity
  const repos = ['rohanrjoshii/obsolescence-protocol', 'deepmind/agentic-ui', 'cyber-archaeology/win95-kernel', 'retro/glitch-synth'];
  const commitMsgs = [
    'feat(core): fix scanlines overlay opacity buffer overflow',
    'fix(webgl): resolve precision artifact on CRT background shader',
    'refactor(audio): add 8-bit sound synthesizer for terminal prompts',
    'style(win95): improve 3D inset bevel on active input cursor',
    'docs: update OBSOLESCENCE_PROTOCOL.md specifications',
    'perf(feed): optimize parallel API aggregator fetching pipeline',
    'fix(spotify): refresh oauth scope token handler',
    'feat(strava): parse elevation gain and cadence metrics'
  ];

  commitMsgs.forEach((msg, idx) => {
    const eventTime = subHours(now, (idx + 1) * 7);
    if ((!query.from || eventTime >= query.from) && (!query.to || eventTime <= query.to)) {
      events.push({
        id: `mock-github-commit-${idx}`,
        type: 'commit',
        source: 'github',
        timestamp: eventTime,
        data: {
          repo: repos[idx % repos.length],
          commits: (idx % 3) + 1,
          messages: [msg, `refs #${100 + idx}: pass integration tests`],
          branch: 'main',
          sha: `a7f9${idx}e9c204`,
        },
      });
    }
  });

  // Pull Requests
  events.push({
    id: 'mock-github-pr-1',
    type: 'pull_request',
    source: 'github',
    timestamp: subHours(now, 14),
    data: {
      action: 'merged',
      repo: 'rohanrjoshii/obsolescence-protocol',
      title: 'PR #42: Add retro Web Audio sound effects and terminal CLI',
      number: 42,
    },
  });

  // Issues
  events.push({
    id: 'mock-github-issue-1',
    type: 'issue',
    source: 'github',
    timestamp: subHours(now, 28),
    data: {
      action: 'opened',
      repo: 'cyber-archaeology/win95-kernel',
      title: 'Issue #13: CRT scanlines flicker on retina displays',
      number: 13,
    },
  });

  // Real Spotify Music Events with VERIFIED Active Spotify Track IDs
  const tracks = [
    {
      track_name: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration_ms: 200000,
      spotify_id: '0VjDiY2F9yMuX1dZ67PUtD',
      spotify_url: 'https://open.spotify.com/track/0VjDiY2F9yMuX1dZ67PUtD',
    },
    {
      track_name: 'Starboy',
      artist: 'The Weeknd ft. Daft Punk',
      album: 'Starboy',
      duration_ms: 230000,
      spotify_id: '7MXV8WvSpUTioj1nF9ZPfR',
      spotify_url: 'https://open.spotify.com/track/7MXV8WvSpUTioj1nF9ZPfR',
    },
    {
      track_name: 'Get Lucky',
      artist: 'Daft Punk ft. Pharrell Williams',
      album: 'Random Access Memories',
      duration_ms: 248000,
      spotify_id: '69kOkLUC8StE0jvhKG72yG',
      spotify_url: 'https://open.spotify.com/track/69kOkLUC8StE0jvhKG72yG',
    },
    {
      track_name: 'As It Was',
      artist: 'Harry Styles',
      album: "Harry's House",
      duration_ms: 167000,
      spotify_id: '44AyE2A6Wn2C1d22Y6V4Y3',
      spotify_url: 'https://open.spotify.com/track/44AyE2A6Wn2C1d22Y6V4Y3',
    },
    {
      track_name: 'Shape of You',
      artist: 'Ed Sheeran',
      album: '÷ (Divide)',
      duration_ms: 233000,
      spotify_id: '7qiZ22zWwsZVJipw32q1OP',
      spotify_url: 'https://open.spotify.com/track/7qiZ22zWwsZVJipw32q1OP',
    },
  ];

  tracks.forEach((track, idx) => {
    const eventTime = subMinutes(now, (idx + 1) * 110);
    if ((!query.from || eventTime >= query.from) && (!query.to || eventTime <= query.to)) {
      events.push({
        id: `mock-spotify-${idx}`,
        type: 'music',
        source: 'spotify',
        timestamp: eventTime,
        data: track,
      });
    }
  });

  // Workout / Movement Events (Strava)
  const workouts = [
    { name: 'Night Cyber Run 🏃‍♂️', sport_type: 'Run', distance: 6.42, duration: 2140, calories: 510, avg_hr: 154, elevation_gain: 45 },
    { name: 'Morning Neon Cycling 🚴‍♂️', sport_type: 'Ride', distance: 22.8, duration: 3350, calories: 720, avg_hr: 142, elevation_gain: 180 },
    { name: 'Tempo Workout ⚡', sport_type: 'Run', distance: 8.1, duration: 2480, calories: 640, avg_hr: 162, elevation_gain: 60 }
  ];

  workouts.forEach((w, idx) => {
    const eventTime = subDays(now, idx + 1);
    if ((!query.from || eventTime >= query.from) && (!query.to || eventTime <= query.to)) {
      events.push({
        id: `mock-strava-${idx}`,
        type: 'workout',
        source: 'strava',
        timestamp: eventTime,
        data: {
          name: w.name,
          sport_type: w.sport_type,
          distance: w.distance,
          duration: w.duration,
          elevation_gain: w.elevation_gain,
          average_speed: (w.distance / (w.duration / 3600)).toFixed(1),
          calories: w.calories,
          average_heartrate: w.avg_hr,
        },
      });
    }
  });

  // Sleep Events (Oura Ring)
  for (let i = 0; i < 4; i++) {
    const eventTime = subDays(now, i);
    if ((!query.from || eventTime >= query.from) && (!query.to || eventTime <= query.to)) {
      events.push({
        id: `mock-oura-sleep-${i}`,
        type: 'sleep',
        source: 'oura',
        timestamp: eventTime,
        data: {
          duration: 27900 - i * 600, // ~7.7h
          efficiency: 89 - i * 2,
          deep_sleep: 5400 + i * 300,
          rem_sleep: 6300 - i * 200,
          light_sleep: 16200,
          awake_time: 1800,
          score: 87 - i * 3,
        },
      });
    }
  }

  // RescueTime Productivity Tracking Events
  for (let i = 0; i < 3; i++) {
    const eventTime = subDays(now, i);
    if ((!query.from || eventTime >= query.from) && (!query.to || eventTime <= query.to)) {
      events.push({
        id: `mock-rescuetime-${i}`,
        type: 'time_tracking',
        source: 'rescuetime',
        timestamp: eventTime,
        data: {
          total_hours: 8.5,
          productive_hours: 6.2,
          neutral_hours: 1.3,
          distracting_hours: 1.0,
          productivity_score: 78 + (i % 5),
          top_activities: [
            { name: 'VS Code', category: 'Software Development', time_spent: 14400, productivity: 2 },
            { name: 'Terminal / zsh', category: 'Systems Architecture', time_spent: 7200, productivity: 2 },
            { name: 'GitHub', category: 'Version Control', time_spent: 3600, productivity: 2 },
            { name: 'Spotify', category: 'Audio Streaming', time_spent: 2400, productivity: 0 }
          ],
        },
      });
    }
  }

  return events;
}
