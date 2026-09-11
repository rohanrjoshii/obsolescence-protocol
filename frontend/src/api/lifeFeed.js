import axios from 'axios'

const API_BASE = '/api'

export async function fetchFeed({ from, to, sources, limit = 100, search, type, sort = 'desc', demo = false }) {
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
    // Return empty feed if API is unavailable (static deployment)
    console.warn('API unavailable, returning empty feed')
    return { feed: [], meta: { isDemo: true, message: 'Backend API not available. Deploy the backend server to see live data.' } }
  }
}

export async function fetchSources() {
  try {
    const response = await axios.get(`${API_BASE}/sources`)
    return response.data
  } catch (error) {
    // Return empty sources if API is unavailable
    console.warn('API unavailable, returning empty sources')
    return { sources: [] }
  }
}

export async function fetchStats({ from, to, demo = false } = {}) {
  const params = new URLSearchParams()
  if (from) params.append('from', from.toISOString())
  if (to) params.append('to', to.toISOString())
  if (demo) params.append('demo', 'true')

  const response = await axios.get(`${API_BASE}/stats?${params}`)
  return response.data
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
