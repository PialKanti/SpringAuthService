import 'server-only';

import { simpleFetch } from '@/lib/simple-fetch';

/**
 * This is a fetch wrapper to facilitate queries to
 * Auth API.
 *
 * @param {string} path - The path to the endpoint
 * @param {RequestInit} options	- Fetch options
 * @returns
 */
export async function authAPI<T, U = Record<string, string | string[]>>(
  path: string,
  options: RequestInit = {}
) {
  const endpoint = process.env.AUTH_BASE_URL;

  // Add content type header
  options.headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const url = new URL(endpoint + path);

  return await simpleFetch<T, U>(url.toString(), options);
}
