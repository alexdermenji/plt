import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem, CartSliceState } from './types';

const initialState: CartSliceState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    minusItem: (state, action: PayloadAction<number>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        existingItem.quantity--;
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    removeAllItems: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, removeAllItems, minusItem } =
  cartSlice.actions;

export default cartSlice.reducer;
