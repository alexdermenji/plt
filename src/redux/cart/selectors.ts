import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectProductQuantity = (id: number) => (state: RootState) =>
  state.cart.items.find((item) => item.id === id) || { quantity: 0 };
