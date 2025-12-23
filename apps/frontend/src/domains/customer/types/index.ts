export type Customer = {
  id: number;
  name: string;
  count: number;
  totalAmount: number;
};

export type CustomerParams = {
  sortBy?: 'asc' | 'desc';
  name?: string;
};

export type Purchase = {
  id: number;
  amount: number;
  date: string;
};
