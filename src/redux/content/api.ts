import axios, {AxiosResponse} from 'axios';

import {IProduct, ILine} from '../interfaces';

export const getProductApi =
  (line: string, product: string): Promise<AxiosResponse<IProduct>> => {
    return axios.get<IProduct>(
      `${process.env.REACT_APP_API_URL}/product/${line.toLowerCase()}/${product.toLowerCase()}`);
  };

export const getLineApi = (line: string): Promise<AxiosResponse<ILine>> => {
  return axios.get<ILine>(`${process.env.REACT_APP_API_URL}/line/${line.toLowerCase()}`);
};
