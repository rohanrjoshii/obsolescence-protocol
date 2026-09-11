// Helper to get correct asset path for production deployment
const BASE_PATH = import.meta.env.BASE_URL || '/'

export function getAssetUrl(path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${BASE_PATH}${cleanPath}`
}
