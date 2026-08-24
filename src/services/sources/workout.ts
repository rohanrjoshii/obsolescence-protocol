import axios from 'axios';
import { DataSource, FeedQuery, LifeEvent } from '../../types';

// Strava API
async function fetchStravaWorkouts(query: FeedQuery): Promise<LifeEvent[]> {
  const token = process.env.STRAVA_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete/activities', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        after: query.from ? Math.floor(query.from.getTime() / 1000) : undefined,
        before: query.to ? Math.floor(query.to.getTime() / 1000) : undefined,
        per_page: 100,
      },
    });

    return response.data.map((activity: any) => ({
      id: `strava-${activity.id}`,
      type: 'workout',
      source: 'strava',
      timestamp: new Date(activity.start_date),
      data: {
        name: activity.name,
        sport_type: activity.sport_type,
        distance: activity.distance / 1000, // Convert to km
        duration: activity.moving_time,
        elevation_gain: activity.total_elevation_gain,
        average_speed: activity.average_speed,
        max_speed: activity.max_speed,
        calories: activity.calories,
        average_heartrate: activity.average_heartrate,
        max_heartrate: activity.max_heartrate,
      },
    }));
  } catch (error) {
    console.error('Error fetching Strava workouts:', error);
    return [];
  }
}

// Fitbit API (alternative)
async function fetchFitbitWorkouts(query: FeedQuery): Promise<LifeEvent[]> {
  const token = process.env.FITBIT_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  // Fitbit API implementation would go here
  // This is a placeholder
  return [];
}

async function healthCheck(): Promise<boolean> {
  const stravaToken = process.env.STRAVA_ACCESS_TOKEN;

  if (!stravaToken) {
    return false;
  }

  try {
    const response = await axios.get('https://www.strava.com/api/v3/athlete', {
      headers: {
        Authorization: `Bearer ${stravaToken}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const workoutSource: DataSource = {
  name: 'workouts',
  enabled: () => Boolean(process.env.STRAVA_ACCESS_TOKEN || process.env.FITBIT_ACCESS_TOKEN),
  fetch: async (query: FeedQuery) => {
    const results = await Promise.all([
      fetchStravaWorkouts(query),
      fetchFitbitWorkouts(query),
    ]);
    return results.flat();
  },
  healthCheck,
};

export default workoutSource;
