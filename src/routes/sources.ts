import { Router } from 'express';
import { getAvailableSources, getSourceByName } from '../services/sources';
import { aggregateFeed } from '../services/aggregator';
import { FeedQuery } from '../types';
import { subDays } from 'date-fns';

const router = Router();

// Get all available sources
router.get('/', async (req, res) => {
  try {
    const sources = await getAvailableSources();
    res.json({ sources });
  } catch (error) {
    console.error('Error fetching sources:', error);
    res.status(500).json({ error: 'Failed to fetch sources' });
  }
});

// Get data from a specific source
router.get('/:source', async (req, res) => {
  try {
    const sourceName = req.params.source;
    const source = getSourceByName(sourceName);

    if (!source) {
      return res.status(404).json({ error: `Source '${sourceName}' not found` });
    }

    const isEnabled = typeof source.enabled === 'function' ? source.enabled() : source.enabled;
    if (!isEnabled) {
      return res.status(400).json({ error: `Source '${sourceName}' is not enabled` });
    }

    const query: FeedQuery = {
      from: req.query.from ? new Date(req.query.from as string) : subDays(new Date(), 7),
      to: req.query.to ? new Date(req.query.to as string) : new Date(),
      sources: [sourceName],
      limit: req.query.limit ? parseInt(req.query.limit as string) : 100,
    };

    const response = await aggregateFeed(query);
    res.json(response);
  } catch (error) {
    console.error('Error fetching source data:', error);
    res.status(500).json({ 
      error: 'Failed to fetch source data',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
