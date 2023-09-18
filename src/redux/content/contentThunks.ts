import {createAsyncThunk} from '@reduxjs/toolkit';

import {getLineApi, getProductApi} from './api';

export const getProduct = createAsyncThunk(
  'product',
  async ({lineProduct, product} :
    {lineProduct: string | undefined, product: string | undefined}, thunkApi) => {
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
  async (line: string | undefined, thunkApi) => {
    try {
      const {data} = await getLineApi(line);
      return data;
    } catch(e) {
      return thunkApi.rejectWithValue('Some Error');
    }
  },
);

