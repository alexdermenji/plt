import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from './types';

export const fetchSingleProduct = createAsyncThunk<Item, string>(
  'singleProduct/fetchSingleProductStatus',
  async (id: string) => {
    const { data } = await axios.get(
      `https://my-json-server.typicode.com/benirvingplt/products/products/${id}`
    );
    return data;
  }
);
