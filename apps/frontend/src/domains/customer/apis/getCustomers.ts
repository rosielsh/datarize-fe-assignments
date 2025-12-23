import { api } from '@/apis';
import { buildQueryParams } from '@/shared/utils/buildQueryParams';
import type { Customer, CustomerParams } from '../types/customer';

export const getCustomers = async (params: CustomerParams): Promise<Customer[]> => {
  const queryParams = buildQueryParams({
    sortBy: params.sortBy,
    name: params.name,
  });

  return api.get<Customer[]>('/customers', queryParams);
};
