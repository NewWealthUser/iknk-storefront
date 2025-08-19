import qs from 'qs';
import { getAuthHeaders } from './data/cookies';

/**
 * Builds a query string from a parameters object, correctly formatting for Medusa's API.
 * @param params - The parameters object.
 * @returns The formatted query string.
 */
export function buildQuery(params: Record<string, any>): string {
  return qs.stringify(params, { encodeValuesOnly: true, arrayFormat: 'brackets' });
}

/**
 * A generic function to make GET requests to the Medusa API using Next.js's cached fetch.
 * @param path - The API path to request (e.g., '/store/products').
 * @param params - Optional query parameters for the request.
 * @returns The JSON response from the API.
 * @throws Will throw an error if the request fails or the environment variable is missing.
 */
export async function medusaGet<T>(
  path: string,
  params?: Record<string, any>
): Promise<T> {
  // Use MEDUSA_BACKEND_URL for consistency with the SDK configuration
  const baseUrl = process.env.MEDUSA_BACKEND_URL;

  if (!baseUrl) {
    throw new Error("The MEDUSA_BACKEND_URL environment variable is not set.");
  }

  let url = `${baseUrl}${path}`;

  if (params) {
    const queryString = buildQuery(params);
    if (queryString) {
      url += `?${queryString}`;
    }
  }

  const authHeaders = await getAuthHeaders();

  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders,
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      const errorBody = await res.json().catch(() => ({
        message: res.statusText,
      }));
      throw new Error(
        `Medusa API request failed: ${res.status} ${res.statusText} - ${errorBody.message || 'No error message provided.'}`
      );
    }

    return await res.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch from Medusa API: ${error.message}`);
      throw new Error(`Failed to fetch from Medusa API: ${error.message}`);
    }
    throw new Error('An unknown error occurred while fetching from the Medusa API.');
  }
}