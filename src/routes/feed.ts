import { Router } from 'express';
import { subDays } from 'date-fns';
import { aggregateFeed } from '../services/aggregator';
import { FeedQuery } from '../types';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const query: FeedQuery = {
      from: req.query.from ? new Date(req.query.from as string) : subDays(new Date(), 30),
      to: req.query.to ? new Date(req.query.to as string) : new Date(),
      sources: req.query.sources ? (req.query.sources as string).split(',') : undefined,
      limit: req.query.limit ? parseInt(req.query.limit as string) : 100,
      search: req.query.search ? (req.query.search as string) : undefined,
      type: req.query.type ? (req.query.type as string) : undefined,
      sort: req.query.sort === 'asc' ? 'asc' : 'desc',
      demo: req.query.demo === 'true' || req.query.demo === '1',
    };

    const response = await aggregateFeed(query);
    res.json(response);
  } catch (error) {
    console.error('Error fetching feed:', error);
    res.status(500).json({ 
      error: 'Failed to fetch feed',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
