import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router';

import {ReactComponent as TickDown} from '../../../assets/icons/tickDown.svg';
import {ReactComponent as TickUp} from '../../../assets/icons/tickUp.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/arrowToRight.svg';

import {IProduct} from '../../../utils/types/types';
import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';
import {allProductsLines} from '../../../utils/constants/linesWithBrands';

import {CustomButton} from '../../../components/customButton/CustomButton';
import {RoundButton} from '../../../components/roundButton/RoundButton';


import styles from './productsList.module.scss';


type ProductsListProps = {
    title: string;
    products: IProduct[];
    activeProduct: number;
    changeProducts: () => void;
    isOpen: boolean;
}

export const ProductsList: React.FunctionComponent<ProductsListProps> = ({
  title,
  products,
  activeProduct,
  changeProducts,
  isOpen}) => {
  const [hasProductsScroll, setHasProductsScroll] = useState(false);
  const [hasProductsTabletScroll, setHasProductsTabletScroll] = useState(false);
  const navigate = useNavigate();

  const getStyle = () => {
    switch (title) {
    case allProductsLines.BiomeLacto:
      return {className: styles.openButtonNewYorkPink,
        classNameActive: styles.openButtonActiveNewYorkPink,
        variant: ButtonVariant.NewYorkPinkTotal};
    case allProductsLines.HeartleafBlemish:
      return {className: styles.openButtonGreenSmoke,
        classNameActive: styles.openButtonActiveGreenSmoke,
        variant: ButtonVariant.GreenSmokeTotal};
    case allProductsLines.OriginalHerbWormwood:
      return {className: styles.openButtonAquaForest,
        classNameActive: styles.openButtonActiveAquaForest,
        variant: ButtonVariant.AquaForestTotal};
    case allProductsLines.ProMoisture:
      return {className: styles.openButtonIndigo,
        classNameActive: styles.openButtonActiveIndigo,
        variant: ButtonVariant.IndigoTotal};
    case allProductsLines.YuzuHoney:
      return {className: styles.openButtonRonchi,
        classNameActive: styles.openButtonActiveRonchi,
        variant: ButtonVariant.RonchiTotal};
    default:
      return {className: styles.openButtonPortage,
        classNameActive: styles.openButtonActivePortage,
        variant: ButtonVariant.PortageTotal};
    }
  };

  const buttonsStyle = getStyle();

  const list = products.map((product, index) => {
    const isActive = activeProduct === index;
    const handlePathClick = () => {
      navigate(product.path);
    };
    return <div key={index} className={styles.productWithBtnWrapper}>
      <CustomButton
        className={cn(styles.product, {[styles.productActive] : isActive})}
        variant={ButtonVariant.Transparent}
        onClick={product.onClick}
      >
        {`#${index+1} ${product.title}`}
      </CustomButton>
      <RoundButton
        onClick={handlePathClick}
        className={cn(styles.btnLink, {[styles.active]: isActive})}
        variant={buttonsStyle.variant}
      >
        <ArrowRight />
      </RoundButton>
    </div>;
  });

  useEffect(()=>{
    const productsList = document.getElementById('productsList');
    setHasProductsScroll(productsList ?
      productsList.scrollHeight > productsList.clientHeight : false);
    const productsListTablet = document.getElementById('productsListTablet');
    setHasProductsTabletScroll(productsListTablet ?
      productsListTablet.scrollHeight > productsListTablet.clientHeight : false);
  }, [products]);

  return (<div className={styles.productsList}>
    <div className={styles.title}>Состоит из _</div>
    <div className={cn(isOpen && styles.titleTabletActive, styles.titleTablet)}>
      <div>Состоит из _</div>
      <button
        onClick={changeProducts}
        className={cn(styles.openButton,
          buttonsStyle.className, isOpen && buttonsStyle.classNameActive)}>
        {isOpen? <TickUp/>: <TickDown/>}
      </button>
    </div>
    <div className={cn(styles.products, hasProductsScroll && styles.scroll)}>
      <div className={styles.productsScroller} id={'productsList'}>
        {list}
      </div>
    </div>
    <div className={cn(isOpen ? styles.productsTablet : styles.productsTabletClose,
      hasProductsTabletScroll && styles.scroll)}>
      <div className={styles.productsScroller} id={'productsListTablet'}>
        {list}
      </div>
    </div>
    <div className={styles.desciprtion}>
      {products[activeProduct] && products[activeProduct].description}
    </div>
  </div>);
};

export default React.memo(ProductsList);
