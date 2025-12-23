type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type ApiRequestOptions = {
  method: RequestMethod;
  body?: unknown;
  params?: Record<string, string>;
  headers?: Record<string, string>;
};
