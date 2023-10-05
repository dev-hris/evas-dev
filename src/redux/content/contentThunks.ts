import {createAsyncThunk} from '@reduxjs/toolkit';

import {getLineApi, getProductApi} from './api';

export const getProduct = createAsyncThunk(
  'product',
  async ({lineProduct, product} :
    {lineProduct: string, product: string}, thunkApi) => {
    try {
      const {data} = await getProductApi(lineProduct, product);
      return data;
    } catch(e) {
      return thunkApi.rejectWithValue('Some Error');
    }
  },
);

export const getLine = createAsyncThunk(
  'line',
  async (line: string, thunkApi) => {
    try {
      const {data} = await getLineApi(line);
      return data;
    } catch(e) {
      return thunkApi.rejectWithValue('Some Error');
    }
  },
);

