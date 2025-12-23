import { api } from '@/apis/api';
import type { Purchase } from '../types/customer';

export const getCustomerPurchases = async (id: number): Promise<Purchase[]> => {
  return api.get<Purchase[]>(`/customers/${id}/purchases`);
};
