import React, {useRef, useEffect} from 'react';
import {useParams, useLocation} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {getLine} from '../../redux/content/contentThunks';
import {setActiveLineWithProducts} from '../../redux/content/contentSlice';

import {Promo} from '../../modules/promo/Promo';
import {ScrollableBenefits} from '../../modules/scrollableBenefits/ScrollableBenefits';
import BlockWithBrands from '../../modules/blockWithBrands/BlockWithBrands';
import {SomeLines} from '../../modules/someLines/SomeLines';

import {ParamTypes} from '../../utils/types/types';

import styles from './productsLine.module.scss';

export const ProductsLine: React.FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();
  const {lineProduct} = useParams<ParamTypes>();
  const line = useAppSelector(state => state.contentSlice.line);
  const isLoading = useAppSelector(state => state.contentSlice.isLoading);
  const error = useAppSelector(state => state.contentSlice.error);

  useEffect(() => {
    dispatch(getLine(lineProduct!));
    dispatch(setActiveLineWithProducts(lineProduct));
  }, [pathname]);

  const ref = useRef<HTMLDivElement>(null);
  const handleMoveToBenefits = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  if (!isLoading && error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.main}>
      {!isLoading && <>
        <Promo
          lineProduct={lineProduct}
          promo={line.promo}
          clickOnButton={handleMoveToBenefits}/>
        <ScrollableBenefits
          lineProduct={lineProduct}
          title={line.promo.title}
          description={line.highlights.description}
          benefitsList={line.highlights.list}/>
        <div className={styles.brand} ref={ref}>
          <BlockWithBrands isHiddenLinesList={true}/>
        </div>
        <div className={styles.lines}>
          <SomeLines />
        </div>
      </>}
    </div>
  );
};

export default ProductsLine;
