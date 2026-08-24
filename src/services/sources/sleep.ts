import axios from 'axios';
import { DataSource, FeedQuery, LifeEvent } from '../../types';

// Oura Ring API
async function fetchOuraSleep(query: FeedQuery): Promise<LifeEvent[]> {
  const token = process.env.OURA_ACCESS_TOKEN;

  if (!token) {
    return [];
  }

  try {
    const response = await axios.get('https://api.ouraring.com/v2/usercollection/sleep', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        start_date: query.from?.toISOString().split('T')[0],
        end_date: query.to?.toISOString().split('T')[0],
      },
    });

    return response.data.data.map((sleep: any) => ({
      id: `oura-sleep-${sleep.id}`,
      type: 'sleep',
      source: 'oura',
      timestamp: new Date(sleep.day),
      data: {
        duration: sleep.total_sleep_duration,
        efficiency: sleep.efficiency,
        deep_sleep: sleep.deep_sleep_duration,
        rem_sleep: sleep.rem_sleep_duration,
        light_sleep: sleep.light_sleep_duration,
        awake_time: sleep.awake_time,
        score: sleep.score,
      },
    }));
  } catch (error) {
    console.error('Error fetching Oura sleep data:', error);
    return [];
  }
}

async function healthCheck(): Promise<boolean> {
  const token = process.env.OURA_ACCESS_TOKEN;

  if (!token) {
    return false;
  }

  try {
    const response = await axios.get('https://api.ouraring.com/v2/usercollection/personal_info', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const sleepSource: DataSource = {
  name: 'sleep',
  enabled: () => Boolean(process.env.OURA_ACCESS_TOKEN),
  fetch: fetchOuraSleep,
  healthCheck,
};

export default sleepSource;
