import { apiRequest } from './apiRequest';

export const api = {
  get: <T>(url: string, params?: Record<string, string>): Promise<T> => {
    return apiRequest<T>(url, { method: 'GET', params });
  },

  post: <T>(url: string, body?: unknown, params?: Record<string, string>): Promise<T> => {
    return apiRequest<T>(url, { method: 'POST', body, params });
  },

  put: <T>(url: string, body?: unknown, params?: Record<string, string>): Promise<T> => {
    return apiRequest<T>(url, { method: 'PUT', body, params });
  },

  patch: <T>(url: string, body?: unknown, params?: Record<string, string>): Promise<T> => {
    return apiRequest<T>(url, { method: 'PATCH', body, params });
  },

  delete: <T>(url: string, params?: Record<string, string>): Promise<T> => {
    return apiRequest<T>(url, { method: 'DELETE', params });
  },
};
