/**
 * Central URL resolution for frontend ↔ backend communication.
 *
 * Set in frontend/.env.local (local) or Vercel env vars (production):
 *   NEXT_PUBLIC_API_URL=https://autopost-1-ax2p.onrender.com
 *   — or the legacy alias —
 *   NEXT_PUBLIC_BACKEND_URL=https://autopost-1-ax2p.onrender.com
 *
 * When unset, defaults to http://localhost:8000 for local development.
 */

export const DEFAULT_BACKEND_URL = "http://localhost:8000"

export function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "")
}

export function getBackendUrl(): string {
  const url =
    process.env.NEXT_PUBLIC_API_URL ||
    process.env.NEXT_PUBLIC_BACKEND_URL ||
    DEFAULT_BACKEND_URL
  return normalizeUrl(url)
}
