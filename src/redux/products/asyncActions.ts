import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Item } from './types';

export const fetchProducts = createAsyncThunk(
  'products/fetchProductsStatus',
  async () => {
    const { data } = await axios.get<Item[]>(
      'https://my-json-server.typicode.com/benirvingplt/products/products'
    );
    return data;
  }
);
