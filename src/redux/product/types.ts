export type Item = {
  id: number;
  name: string;
  price: number;
  img: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface SingleProductState {
  item: Item;
  status: Status;
}
