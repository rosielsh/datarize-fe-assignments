import { useEffect, useState } from 'react';

type UseFetchOptions<T> = {
  fetcher: () => Promise<T>;
  deps?: unknown[];
  enabled?: boolean;
};

export const useFetch = <T>({ fetcher, deps = [], enabled = true }: UseFetchOptions<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const result = await fetcher();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled]);

  if (error) {
    throw error;
  }

  return { data, isLoading, error };
};
