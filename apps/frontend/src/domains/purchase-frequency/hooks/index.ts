import { api } from '@/apis';
import { useFetch } from '@/shared/hooks/useFetch';
import { buildQueryParams } from '@/shared/utils/buildQueryParams';
import type { PurchaseFrequencyData, PurchaseFrequencyParams } from '../types';

export const usePurchaseFrequency = (params?: PurchaseFrequencyParams) => {
  const { data, isLoading, error } = useFetch<PurchaseFrequencyData[]>({
    fetcher: async () => {
      const queryParams = buildQueryParams({
        from: params?.from,
        to: params?.to,
      });

      return api.get<PurchaseFrequencyData[]>('/purchase-frequency', queryParams);
    },
    deps: [params?.from, params?.to],
  });

  return { data: data ?? [], isLoading, error };
};
