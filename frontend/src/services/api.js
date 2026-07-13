const RAW_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

const API_ROOT = RAW_API_URL
  .replace(/\/$/, '')
  .replace(/\/api$/, '')

export async function apiRequest(endpoint, options = {}) {
  const token = localStorage.getItem('token')

  const cleanEndpoint = endpoint.startsWith('/api')
    ? endpoint
    : `/api${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`

  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const response = await fetch(`${API_ROOT}${cleanEndpoint}`, {
    ...options,
    headers,
  })

  const data = await response.json().catch(() => ({}))

  if (!response.ok) {
    throw new Error(data.message || data.error || `Request failed: ${response.status}`)
  }

  return data
}
