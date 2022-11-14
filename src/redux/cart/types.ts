export type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  quantity: number;
};

export interface CartSliceState {
  items: CartItem[];
}
