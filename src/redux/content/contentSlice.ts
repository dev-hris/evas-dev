import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import {IContentState, IProduct, ILine} from '../interfaces';

import {RootState} from '../store';

import {lines} from '../../utils/constants/fraijour';

import {getLine, getProduct} from './contentThunks';


const initialState: IContentState = {
  activeLine: '',
  allProducts: [],
  activeProduct: '',
  line: {},
  product: {},
};

export const contentSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setActiveLineWithProducts: (state, action) => {
      if (action.payload !== state.activeLine) {
        state.activeLine = action.payload;
        state.allProducts = lines.get(action.payload) || [];
      }
    },
    setActiveProduct: (state, action) => {
      state.activeProduct = action.payload;
    },
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setLine: (state, action) => {
      state.line = action.payload;
    },
  },
  extraReducers: {
    [getLine.fulfilled.type]: (state, action: PayloadAction<ILine>) => {
      state.line = action.payload;
    },
    // [getLine.pending.type]: (state) => {
    //   // state.isLoading = true;
    // },
    // [getLine.rejected.type]: (state, action: PayloadAction<string>) => {
    //   // state.isLoading = false;
    //   // state.error = action.payload;
    // },
    [getProduct.fulfilled.type]: (state, action: PayloadAction<IProduct>) => {
      state.product = action.payload;
    },
    // [getProduct.pending.type]: (state) => {
    //   // state.isLoading = true;
    // },
    // [getProduct.rejected.type]: (state, action: PayloadAction<string>) => {
    //   // state.isLoading = false;
    //   // state.error = action.payload;
    // },
  },
});

export const {
  setActiveLineWithProducts,
  setActiveProduct,
} = contentSlice.actions;
export default contentSlice.reducer;
