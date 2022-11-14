import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartSlice from './cart/slice';
import menuSlice from './menu/slice';
import productSlice from './product/slice';
import productsSlice from './products/slice';

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productsSlice,
    product: productSlice,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
