import axios from 'axios'
import { MOCK_FEED, MOCK_SOURCES, MOCK_STATS } from '../data/mockData'

const API_BASE = '/api'
const USE_MOCK_DATA = true // Set to false when backend is deployed

export async function fetchFeed({ from, to, sources, limit = 100, search, type, sort = 'desc', demo = false }) {
  if (USE_MOCK_DATA) {
    console.log('Using mock data (backend not available)')
    return { 
      feed: MOCK_FEED,
      meta: { 
        isDemo: true, 
        total: MOCK_FEED.length,
        message: 'Showing demo data. Deploy backend API for live Spotify/LeetCode/GitHub stats.' 
      } 
    }
  }

  try {
    const params = new URLSearchParams()
    if (from) params.append('from', from.toISOString())
    if (to) params.append('to', to.toISOString())
    if (sources && sources.length > 0) params.append('sources', sources.join(','))
    if (limit) params.append('limit', limit.toString())
    if (search) params.append('search', search)
    if (type) params.append('type', type)
    if (sort) params.append('sort', sort)
    if (demo) params.append('demo', 'true')

    const response = await axios.get(`${API_BASE}/feed?${params}`)
    return response.data
  } catch (error) {
    console.warn('API unavailable, using mock data')
    return { 
      feed: MOCK_FEED,
      meta: { 
        isDemo: true, 
        message: 'Backend API not available. Deploy the backend server to see live data.' 
      } 
    }
  }
}

export async function fetchSources() {
  if (USE_MOCK_DATA) {
    return { sources: MOCK_SOURCES }
  }

  try {
    const response = await axios.get(`${API_BASE}/sources`)
    return response.data
  } catch (error) {
    console.warn('API unavailable, using mock sources')
    return { sources: MOCK_SOURCES }
  }
}

export async function fetchStats({ from, to, demo = false } = {}) {
  if (USE_MOCK_DATA) {
    return { stats: MOCK_STATS }
  }

  try {
    const params = new URLSearchParams()
    if (from) params.append('from', from.toISOString())
    if (to) params.append('to', to.toISOString())
    if (demo) params.append('demo', 'true')

    const response = await axios.get(`${API_BASE}/stats?${params}`)
    return response.data
  } catch (error) {
    console.warn('API unavailable, using mock stats')
    return { stats: MOCK_STATS }
  }
}

export function getExportUrl({ format = 'json', from, to, sources, search, type, demo = false } = {}) {
  const params = new URLSearchParams()
  params.append('format', format)
  if (from) params.append('from', from.toISOString())
  if (to) params.append('to', to.toISOString())
  if (sources && sources.length > 0) params.append('sources', sources.join(','))
  if (search) params.append('search', search)
  if (type) params.append('type', type)
  if (demo) params.append('demo', 'true')

  return `${API_BASE}/export?${params}`
}
