import { parseUnknownError } from './helpers';

/**
 * A fetch wrapper that does the following
 * - Add typed responses
 * - Extends error handling to handle non 200 responses.
 */
export async function simpleFetch<T, U>(
  url: string,
  options: RequestInit = {}
) {
  const response = await fetch(url, options);

  try {
    const responseBody = await response.json();

    if (response.ok) {
      return {
        success: true as const,
        status: response.status,
        headers: response.headers,
        body: responseBody as T,
      };
    } else {
      return {
        success: false as const,
        status: response.status,
        body: responseBody as U,
      };
    }
  } catch (e) {
    console.error('Fetch Parser => ', parseUnknownError(e));

    return {
      success: false as const,
      status: response.status,
      body: {
        non_field_errors: 'Failed to parse body',
      } as U,
    };
  }
}
