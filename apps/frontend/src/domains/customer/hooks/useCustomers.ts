import { useFetch } from '@/shared/hooks/useFetch';
import { getCustomers } from '../apis/getCustomers';
import type { Customer, CustomerParams } from '../types/customer';

type UseCustomersResponse = {
  data: Customer[];
  isLoading: boolean;
  error: Error | null;
};

export const useCustomers = (params?: CustomerParams): UseCustomersResponse => {
  const { data, isLoading, error } = useFetch({
    fetcher: () => getCustomers(params ?? {}),
    deps: [params?.sortBy, params?.name],
  });

  return { data: data ?? [], isLoading, error };
};
