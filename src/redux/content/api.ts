import axios, {AxiosResponse} from 'axios';

import {IProduct, ILine} from '../interfaces';

export const getProductApi =
  (line: string | undefined, product: string | undefined): Promise<AxiosResponse<IProduct>> => {
    return axios.get<IProduct>(`${process.env.REACT_APP_API_URL}/${line}/${product}`);
  };

export const getLineApi = (line: string | undefined): Promise<AxiosResponse<ILine>> => {
  return axios.get<ILine>(`${process.env.REACT_APP_API_URL}/${line}`);
};
