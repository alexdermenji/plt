import { createSlice } from '@reduxjs/toolkit';
import { fetchMenu } from './asyncActions';
import { MenuState, Status } from './types';

const initialState: MenuState = {
  items: [],
  status: Status.LOADING,
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchMenu.pending, (state) => {
        state.status = Status.LOADING;
        state.items = [];
      })
      .addCase(fetchMenu.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = Status.SUCCESS;
      })
      .addCase(fetchMenu.rejected, (state) => {
        state.items = [];
        state.status = Status.ERROR;
      }),
});

export default menuSlice.reducer;
