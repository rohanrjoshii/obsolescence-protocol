import axios from 'axios';
import { DataSource, FeedQuery, LifeEvent } from '../../types';

// Spotify API
async function fetchSpotifyHistory(query: FeedQuery): Promise<LifeEvent[]> {
  const token = process.env.SPOTIFY_ACCESS_TOKEN;

  if (!token) {
    console.log('Spotify: No token configured');
    return [];
  }

  try {
    console.log('Fetching Spotify history...');
    const response = await axios.get('https://api.spotify.com/v1/me/player/recently-played', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        limit: 50,
      },
    });

    console.log(`Spotify: Fetched ${response.data.items?.length || 0} items`);

    return response.data.items
      .filter((item: any) => {
        const playedAt = new Date(item.played_at);
        return (!query.from || playedAt >= query.from) && 
               (!query.to || playedAt <= query.to);
      })
      .map((item: any) => ({
        id: `spotify-${item.played_at}-${item.track.id}`,
        type: 'music',
        source: 'spotify',
        timestamp: new Date(item.played_at),
        data: {
          track_name: item.track.name,
          artist: item.track.artists.map((a: any) => a.name).join(', '),
          album: item.track.album.name,
          duration_ms: item.track.duration_ms,
        },
      }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Spotify API Error:', {
        status: error.response?.status,
        message: error.response?.data?.error?.message || error.message
      });
    } else {
      console.error('Error fetching Spotify history:', error);
    }
    return [];
  }
}

async function healthCheck(): Promise<boolean> {
  const token = process.env.SPOTIFY_ACCESS_TOKEN;

  if (!token) {
    return false;
  }

  try {
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.status === 200;
  } catch (error) {
    return false;
  }
}

const musicSource: DataSource = {
  name: 'music',
  enabled: () => Boolean(process.env.SPOTIFY_ACCESS_TOKEN),
  fetch: fetchSpotifyHistory,
  healthCheck,
};

export default musicSource;
