import axios from 'axios';
import { DataSource, FeedQuery, LifeEvent } from '../../types';

const GITHUB_API = 'https://api.github.com';

async function fetchGithubEvents(query: FeedQuery): Promise<LifeEvent[]> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    console.warn('GitHub credentials not configured');
    return [];
  }

  try {
    const response = await axios.get(
      `${GITHUB_API}/users/${username}/events`,
      {
        headers: {
          Authorization: `token ${token}`,
          Accept: 'application/vnd.github.v3+json',
        },
        params: {
          per_page: 100,
        },
      }
    );

    const events: LifeEvent[] = response.data
      .filter((event: any) => {
        const eventDate = new Date(event.created_at);
        return (!query.from || eventDate >= query.from) && 
               (!query.to || eventDate <= query.to);
      })
      .map((event: any) => {
        let type = 'github_event';
        let data: any = {};

        switch (event.type) {
          case 'PushEvent':
            type = 'commit';
            data = {
              repo: event.repo.name,
              commits: event.payload.size || 1,
              messages: [`Pushed to ${event.payload.ref?.replace('refs/heads/', '')}`],
              branch: event.payload.ref?.replace('refs/heads/', ''),
              sha: event.payload.head,
            };
            break;
          case 'PullRequestEvent':
            type = 'pull_request';
            data = {
              action: event.payload.action,
              repo: event.repo.name,
              title: event.payload.pull_request?.title,
              number: event.payload.pull_request?.number,
            };
            break;
          case 'IssuesEvent':
            type = 'issue';
            data = {
              action: event.payload.action,
              repo: event.repo.name,
              title: event.payload.issue?.title,
              number: event.payload.issue?.number,
            };
            break;
          case 'CreateEvent':
            type = 'create';
            data = {
              ref_type: event.payload.ref_type,
              repo: event.repo.name,
              ref: event.payload.ref,
            };
            break;
          default:
            type = event.type.toLowerCase();
            data = { repo: event.repo.name };
        }

        return {
          id: `github-${event.id}`,
          type,
          source: 'github',
          timestamp: new Date(event.created_at),
          data,
        };
      });

    return events;
  } catch (error) {
    console.error('Error fetching GitHub events:', error);
    return [];
  }
}

async function healthCheck(): Promise<boolean> {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return false;
  }

  try {
    const response = await axios.get(`${GITHUB_API}/user`, {
      headers: {
        Authorization: `token ${token}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const githubSource: DataSource = {
  name: 'github',
  enabled: () => Boolean(process.env.GITHUB_TOKEN && process.env.GITHUB_USERNAME),
  fetch: fetchGithubEvents,
  healthCheck,
};

export default githubSource;
