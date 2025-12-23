import { api } from '@/apis';
import { buildQueryParams } from '@/shared/utils/buildQueryParams';
import type { PurchaseFrequencyData, PurchaseFrequencyParams } from '../types/purchase';

export const getPurchaseFrequency = async (
  params: PurchaseFrequencyParams
): Promise<PurchaseFrequencyData[]> => {
  const queryParams = buildQueryParams({
    from: params.from,
    to: params.to,
  });

  return api.get<PurchaseFrequencyData[]>('/purchase-frequency', queryParams);
};
