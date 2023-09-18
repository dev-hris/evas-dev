import React, {useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {useAppDispatch} from '../../redux/hooks';

import {ParamTypes} from '../../utils/types/types';

import {CardProduct} from '../../modules/cardProduct/CardProduct';

import {getProduct} from '../../redux/content/contentThunks';
import {setActiveLineWithProducts, setActiveProduct} from '../../redux/content/contentSlice';

import styles from './product.module.scss';

export const Product: React.FunctionComponent = () => {
  const {pathname} = useLocation();
  const {lineProduct, product} = useParams<ParamTypes>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct({lineProduct, product}));
    dispatch(setActiveLineWithProducts(lineProduct));
    dispatch(setActiveProduct(product));
  }, [pathname]);

  return (
    <div className={styles.main}>
      <CardProduct />
    </div>
  );
};

export default Product;
