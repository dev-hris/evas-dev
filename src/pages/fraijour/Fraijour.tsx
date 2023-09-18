import React, {useRef} from 'react';

import MainProducts from '../../modules/mainProducts/MainProducts';
import BlockWithBrands from '../../modules/blockWithBrands/BlockWithBrands';
import {CompositionOfProducts} from '../../modules/compositionOfProducts/CompositionOfProducts';
import {BrandsStories} from '../../modules/brandsStories/BrandsStories';

import {useAppSelector} from '../../redux/hooks';

import styles from './fraijour.module.scss';


export const Fraijour: React.FunctionComponent = () => {
  const isShowStories = useAppSelector(state => state.storiesSlice.isShowStories);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className={styles.main}>
      <MainProducts handleClickScroll={handleClick} />
      <CompositionOfProducts />
      <div ref={ref} className={styles.allBrands}>
        <BlockWithBrands/>
      </div>
      {isShowStories && <BrandsStories />}
    </div>
  );
};

export default Fraijour;
