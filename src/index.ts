import dotenv from 'dotenv';

// Load environment variables FIRST before any other imports
dotenv.config();

console.log('Environment check:', {
  GITHUB_TOKEN: process.env.GITHUB_TOKEN ? '***Configured***' : 'Missing',
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Missing',
  SPOTIFY_ACCESS_TOKEN: process.env.SPOTIFY_ACCESS_TOKEN ? '***Configured***' : 'Missing',
  STRAVA_ACCESS_TOKEN: process.env.STRAVA_ACCESS_TOKEN ? '***Configured***' : 'Missing',
  OURA_ACCESS_TOKEN: process.env.OURA_ACCESS_TOKEN ? '***Configured***' : 'Missing',
  RESCUETIME_API_KEY: process.env.RESCUETIME_API_KEY ? '***Configured***' : 'Missing',
});

import express from 'express';
import cors from 'cors';
import feedRouter from './routes/feed';
import sourcesRouter from './routes/sources';
import statsRouter from './routes/stats';
import exportRouter from './routes/export';
import profileRouter from './routes/profile';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Live Infrastructure Health & Telemetry
app.get(['/health', '/api/health'], (req, res) => {
  const uptimeSec = Math.floor(process.uptime());
  const hours = Math.floor(uptimeSec / 3600);
  const minutes = Math.floor((uptimeSec % 3600) / 60);
  const seconds = uptimeSec % 60;
  const mem = process.memoryUsage();

  res.json({
    status: 'ONLINE',
    gateway: 'Node.js/Express Reverse Telemetry Proxy',
    uptime: `${hours}h ${minutes}m ${seconds}s`,
    uptimeSeconds: uptimeSec,
    memory: {
      heapUsedMB: Math.round((mem.heapUsed / 1024 / 1024) * 10) / 10,
      heapTotalMB: Math.round((mem.heapTotal / 1024 / 1024) * 10) / 10,
      rssMB: Math.round((mem.rss / 1024 / 1024) * 10) / 10,
    },
    runtime: process.version,
    platform: process.platform,
    arch: process.arch,
    timestamp: new Date().toISOString(),
  });
});

// Routes
app.use('/api/feed', feedRouter);
app.use('/api/sources', sourcesRouter);
app.use('/api/stats', statsRouter);
app.use('/api/export', exportRouter);
app.use('/api/profile', profileRouter);

app.listen(PORT, () => {
  console.log(`🚀 Personal Life API running on http://localhost:${PORT}`);
  console.log(`📊 Feed endpoint: http://localhost:${PORT}/api/feed`);
  console.log(`🔍 Sources endpoint: http://localhost:${PORT}/api/sources`);
  console.log(`📈 Stats endpoint: http://localhost:${PORT}/api/stats`);
  console.log(`💾 Export endpoint: http://localhost:${PORT}/api/export`);
});
