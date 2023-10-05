import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';

import {ParamTypes} from '../../utils/types/types';

import {CardProduct} from '../../modules/cardProduct/CardProduct';

import {getProduct} from '../../redux/content/contentThunks';
import {setActiveLineWithProducts, setActiveProduct} from '../../redux/content/contentSlice';

import styles from './product.module.scss';

export const Product: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const {lineProduct, product} = useParams<ParamTypes>();
  const isLoading = useAppSelector(state => state.contentSlice.isLoading);
  const error = useAppSelector(state => state.contentSlice.error);

  useEffect(() => {
    dispatch(getProduct({lineProduct: lineProduct!, product: product!}));
    dispatch(setActiveLineWithProducts(lineProduct));
    dispatch(setActiveProduct(product));
  }, [pathname]);

  if (!isLoading && error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.main}>
      {!isLoading && <CardProduct />}
    </div>
  );
};

export default Product;
