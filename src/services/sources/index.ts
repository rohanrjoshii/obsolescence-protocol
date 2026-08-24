import { DataSource } from '../../types';
import githubSource from './github';
import sleepSource from './sleep';
import workoutSource from './workout';
import musicSource from './music';
import timeTrackingSource from './timeTracking';

const sources: DataSource[] = [
  githubSource,
  sleepSource,
  workoutSource,
  musicSource,
  timeTrackingSource,
];

export function getAllSources(): DataSource[] {
  return sources;
}

export function getSourceByName(name: string): DataSource | undefined {
  return sources.find(s => s.name === name);
}

export async function getAvailableSources() {
  const statusPromises = sources.map(async (source) => {
    const isHealthy = await source.healthCheck();
    const isEnabled = typeof source.enabled === 'function' ? source.enabled() : source.enabled;
    return {
      name: source.name,
      enabled: isEnabled,
      healthy: isHealthy,
    };
  });

  return Promise.all(statusPromises);
}
