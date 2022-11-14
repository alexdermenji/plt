export type Item = {
  id: number;
  title: string;
  price: number;
  img: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface ProductsState {
  items: Item[];
  status: Status;
}
