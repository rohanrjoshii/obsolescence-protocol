import axios from 'axios';
import { DataSource, FeedQuery, LifeEvent } from '../../types';

// RescueTime API
async function fetchRescueTimeData(query: FeedQuery): Promise<LifeEvent[]> {
  const apiKey = process.env.RESCUETIME_API_KEY;

  if (!apiKey) {
    return [];
  }

  try {
    const response = await axios.get('https://www.rescuetime.com/anapi/data', {
      params: {
        key: apiKey,
        perspective: 'interval',
        resolution_time: 'hour',
        restrict_begin: query.from?.toISOString().split('T')[0],
        restrict_end: query.to?.toISOString().split('T')[0],
        format: 'json',
      },
    });

    // Group by day and create summary events
    const dailyData: Map<string, any> = new Map();

    response.data.rows.forEach((row: any) => {
      const [date, timeSpent, numPeople, activity, category, productivity] = row;
      const dayKey = date.split('T')[0];

      if (!dailyData.has(dayKey)) {
        dailyData.set(dayKey, {
          date: dayKey,
          total_time: 0,
          productive_time: 0,
          neutral_time: 0,
          distracting_time: 0,
          activities: [],
        });
      }

      const dayData = dailyData.get(dayKey);
      dayData.total_time += timeSpent;

      if (productivity === 2) {
        dayData.productive_time += timeSpent;
      } else if (productivity === 0) {
        dayData.neutral_time += timeSpent;
      } else if (productivity === -2) {
        dayData.distracting_time += timeSpent;
      }

      dayData.activities.push({
        name: activity,
        category,
        time_spent: timeSpent,
        productivity,
      });
    });

    return Array.from(dailyData.entries()).map(([date, data]) => ({
      id: `rescuetime-${date}`,
      type: 'time_tracking',
      source: 'rescuetime',
      timestamp: new Date(date),
      data: {
        total_hours: Math.round(data.total_time / 3600 * 100) / 100,
        productive_hours: Math.round(data.productive_time / 3600 * 100) / 100,
        neutral_hours: Math.round(data.neutral_time / 3600 * 100) / 100,
        distracting_hours: Math.round(data.distracting_time / 3600 * 100) / 100,
        productivity_score: Math.round((data.productive_time / data.total_time) * 100),
        top_activities: data.activities
          .sort((a: any, b: any) => b.time_spent - a.time_spent)
          .slice(0, 5),
      },
    }));
  } catch (error) {
    console.error('Error fetching RescueTime data:', error);
    return [];
  }
}

async function healthCheck(): Promise<boolean> {
  const apiKey = process.env.RESCUETIME_API_KEY;

  if (!apiKey) {
    return false;
  }

  try {
    const response = await axios.get('https://www.rescuetime.com/anapi/data', {
      params: {
        key: apiKey,
        perspective: 'rank',
        resolution_time: 'day',
        restrict_kind: 'productivity',
        format: 'json',
      },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const timeTrackingSource: DataSource = {
  name: 'time_tracking',
  enabled: () => Boolean(process.env.RESCUETIME_API_KEY),
  fetch: fetchRescueTimeData,
  healthCheck,
};

export default timeTrackingSource;
