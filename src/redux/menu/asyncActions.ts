import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMenu = createAsyncThunk('menu/fetchMenuStatus', async () => {
  const { data } = await axios.get(
    `https://my-json-server.typicode.com/benirvingplt/products/menu`
  );
  return data;
});
