const API_BASE_URL = import.meta.env.API_BASE_URL;

export const apiClient = {
  get: async <T>(url: string, params?: Record<string, string>): Promise<T> => {
    const queryString = params ? '?' + new URLSearchParams(params).toString() : '';
    const response = await fetch(`${API_BASE_URL}${url}${queryString}`);

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return response.json();
  },
};
