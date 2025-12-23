import { useFetch } from '@/shared/hooks/useFetch';
import { getPurchaseFrequency } from '../apis/getPurchaseFrequency';
import type { PurchaseFrequencyParams } from '../types/purchase';

export const usePurchaseFrequency = (params: PurchaseFrequencyParams) => {
  const { data, isLoading } = useFetch({
    fetcher: () => getPurchaseFrequency(params),
    deps: [params?.from, params?.to],
  });

  return { data: data ?? [], isLoading };
};
