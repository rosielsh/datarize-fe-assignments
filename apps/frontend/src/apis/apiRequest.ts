import type { ApiRequestOptions } from './types';

const API_BASE_URL = import.meta.env.API_BASE_URL;

export async function apiRequest<T>(url: string, options: ApiRequestOptions): Promise<T> {
  const { method, body, params, headers = {} } = options;

  const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
  const fullUrl = `${API_BASE_URL}${url}${queryString}`;

  const requestHeaders: HeadersInit = {
    'Content-Type': 'application/json',
    ...headers,
  };

  const requestOptions: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body && method !== 'GET') {
    requestOptions.body = JSON.stringify(body);
  }

  try {
    const response = await fetch(fullUrl, requestOptions);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      return response.json();
    }

    return {} as T;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('Unknown error occurred');
  }
}
