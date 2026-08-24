import { Router } from 'express';
import { subDays } from 'date-fns';
import { aggregateFeed } from '../services/aggregator';
import { FeedQuery } from '../types';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const format = (req.query.format as string) || 'json';
    const query: FeedQuery = {
      from: req.query.from ? new Date(req.query.from as string) : subDays(new Date(), 30),
      to: req.query.to ? new Date(req.query.to as string) : new Date(),
      sources: req.query.sources ? (req.query.sources as string).split(',') : undefined,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 500,
      search: req.query.search ? (req.query.search as string) : undefined,
      type: req.query.type ? (req.query.type as string) : undefined,
      demo: req.query.demo === 'true' || req.query.demo === '1',
    };

    const response = await aggregateFeed(query);
    const feed = response.feed;

    if (format === 'csv') {
      const headers = ['id', 'source', 'type', 'timestamp', 'summary'];
      const rows = feed.map(item => {
        const timestampStr = new Date(item.timestamp).toISOString();
        const summary = JSON.stringify(item.data).replace(/"/g, '""');
        return `"${item.id}","${item.source}","${item.type}","${timestampStr}","${summary}"`;
      });

      const csvContent = [headers.join(','), ...rows].join('\n');
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=life-feed-${Date.now()}.csv`);
      return res.send(csvContent);
    }

    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Content-Disposition', `attachment; filename=life-feed-${Date.now()}.json`);
    res.json(response);
  } catch (error) {
    console.error('Error exporting feed:', error);
    res.status(500).json({ 
      error: 'Failed to export feed',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
