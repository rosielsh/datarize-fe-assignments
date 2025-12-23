import { api } from '@/apis';
import { useFetch } from '@/shared/hooks/useFetch';
import { buildQueryParams } from '@/shared/utils/buildQueryParams';
import type { Customer, CustomerParams, Purchase } from '../types';

export const useCustomers = (params?: CustomerParams) => {
  const { data, isLoading, error } = useFetch<Customer[]>({
    fetcher: async () => {
      const queryParams = buildQueryParams({
        sortBy: params?.sortBy,
        name: params?.name,
      });

      return api.get<Customer[]>('/customers', queryParams);
    },
    deps: [params?.sortBy, params?.name],
  });

  return { data: data ?? [], isLoading, error };
};

export const useCustomerPurchases = (id: number) => {
  const { data, isLoading, error } = useFetch<Purchase[]>({
    fetcher: async () => {
      return api.get<Purchase[]>(`/customers/${id}/purchases`);
    },
    deps: [id],
    enabled: !!id,
  });

  return { data: data ?? [], isLoading, error };
};
