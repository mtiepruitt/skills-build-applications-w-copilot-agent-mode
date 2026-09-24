const codespaceName = import.meta.env.VITE_CODESPACE_NAME

function getApiBaseUrl() {
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api`
  }

  const hostname = window.location.hostname

  if (hostname.endsWith('.app.github.dev')) {
    return `https://${hostname.replace('-5173.app.github.dev', '-8000.app.github.dev')}/api`
  }

  return 'http://localhost:8000/api'
}

export const apiBaseUrl = getApiBaseUrl()

export function normalizeCollectionResponse(payload) {
  if (Array.isArray(payload)) {
    return payload
  }

  if (!payload || typeof payload !== 'object') {
    return []
  }

  const candidates = [payload.results, payload.items, payload.data, payload.docs]
  const collection = candidates.find((candidate) => Array.isArray(candidate))

  return collection || []
}

export async function fetchCollection(resource) {
  const response = await fetch(`${apiBaseUrl}/${resource}/`)

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()
  return normalizeCollectionResponse(payload)
}