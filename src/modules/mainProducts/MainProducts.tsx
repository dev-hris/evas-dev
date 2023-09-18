import React from 'react';

import {MainProductsMobile} from './mainProductsMobile/MainProductsMobile';
import {MainProductsDesktop} from './mainProductsDesktop/MainProductsDesktop';

type Props = {
  handleClickScroll: () => void;
}

const MainProducts: React.FunctionComponent<Props> = ({handleClickScroll}) => {
  return (
    <>
      <MainProductsDesktop handleClickScroll={handleClickScroll} />
      <MainProductsMobile handleClickScroll={handleClickScroll} />
    </>
  );
};

export default React.memo(MainProducts);
