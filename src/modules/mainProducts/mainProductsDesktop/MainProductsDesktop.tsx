import React, {useCallback, useState} from 'react';

import {useImagePreloader} from '../../../utils/helpers/useImagePreloader';

import {bottles} from '../../../utils/constants/bottles';

import {TitleProduct} from '../titleProduct/TitleProduct';
import {Preloader} from '../../../components/preloader/Preloader';

import background from '../../../assets/images/fraijourMain/main/mainBackground.png';
import bottle1 from '../../../assets/images/fraijourMain/main/bottle1.png';
import bottle2 from '../../../assets/images/fraijourMain/main/bottle2.png';
import bottle3 from '../../../assets/images/fraijourMain/main/bottle3.png';
import bottle4 from '../../../assets/images/fraijourMain/main/bottle4.png';
import bottle5 from '../../../assets/images/fraijourMain/main/bottle5.png';
import bottle6 from '../../../assets/images/fraijourMain/main/bottle6.png';

import {Bottles} from './Bottles/Bottles';
import {ShadowBox} from './shadowBox/ShadowBox';

import styles from './mainProductsDesktop.module.scss';

type MainProductsProps = {
  handleClickScroll: () => void;
};

const imgsPreload = [background, bottle1, bottle2, bottle3, bottle4, bottle5, bottle6];

export const MainProductsDesktop: React.FunctionComponent<MainProductsProps> = ({
  handleClickScroll,
}) => {
  const {isPreloaded} = useImagePreloader(imgsPreload, 500);
  const [activeProduct, setActiveProduct] = useState(-1);

  const handleSetActiveProduct = useCallback((newActiveProduct: number) => {
    setActiveProduct((pr) => (pr === newActiveProduct ? -1 : newActiveProduct));
  }, []);
  const handleClose = () => {
    handleSetActiveProduct(-1);
  };
  const isActiveProduct = activeProduct !== -1;
  if(!isPreloaded) {
    return <Preloader className={styles.preloader} />;
  }
  return (
    <>
      <div className={styles.container}>
        <TitleProduct
          handleClickScroll={handleClickScroll}
          isActive={isActiveProduct}
        />
        <Bottles
          isActive={isActiveProduct}
          activeProduct={activeProduct}
          setActiveProduct={handleSetActiveProduct}
          bottles={bottles}
        />
        {isActiveProduct && <ShadowBox
          url={bottles[activeProduct].background.url}
          handleClose={handleClose}
        />}
      </div>
    </>
  );
};
