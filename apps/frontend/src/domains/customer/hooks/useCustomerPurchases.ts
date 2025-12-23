import { useFetch } from '@/shared/hooks/useFetch';
import { getCustomerPurchases } from '../apis/getCustomerPurchases';
import type { Purchase } from '../types/customer';

type UseCustomerPurchasesResponse = {
  data: Purchase[];
  isLoading: boolean;
  error: Error | null;
};

export const useCustomerPurchases = (id: number): UseCustomerPurchasesResponse => {
  const { data, isLoading, error } = useFetch({
    fetcher: () => getCustomerPurchases(id),
    deps: [id],
    enabled: !!id,
  });

  return { data: data ?? [], isLoading, error };
};
