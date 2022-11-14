import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from './asyncActions';
import { ProductsState, Status } from './types';

const initialState: ProductsState = {
  items: [],
  status: Status.LOADING,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.items = [];
        state.status = Status.ERROR;
      }),
});

export default productsSlice.reducer;
