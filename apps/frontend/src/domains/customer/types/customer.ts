export type Customer = {
  id: number;
  name: string;
  count: number;
  totalAmount: number;
};

export type CustomerParams = {
  sortBy?: 'asc' | 'desc' | null;
  name?: string;
};

export type Purchase = {
  id: number;
  quantity: number;
  product: string;
  price: number;
  imgSrc: string;
  date: string;
};
