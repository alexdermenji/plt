import { createSlice } from '@reduxjs/toolkit';
import { fetchSingleProduct } from './asyncActions';
import { Item, SingleProductState, Status } from './types';

const initialState: SingleProductState = {
  item: {} as Item,
  status: Status.LOADING,
};

export const productSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = Status.LOADING;
        state.item = {} as Item;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.item = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchSingleProduct.rejected, (state) => {
        state.item = {} as Item;
        state.status = Status.ERROR;
      }),
});

export default productSlice.reducer;
