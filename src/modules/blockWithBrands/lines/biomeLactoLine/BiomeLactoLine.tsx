import React from 'react';
import {useNavigate} from 'react-router-dom';

import ButtonWithPopover from '../../../../components/buttonWithPopover/ButtonWithPopover';
import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';

import {PopoverContainer} from '../popoverContainer/PopoverContainer';

import {ReactComponent as Pointer} from '../../../../assets/icons/circlePointer.svg';

import {IProduct} from '../../../../utils/types/types';

import styles from './biomeLactoLine.module.scss';

type Props = {
  activeProduct: number;
  products: IProduct[];
}

export const BiomeLactoLine: React.FunctionComponent<Props> = ({
  activeProduct,
  products}) => {
  const navigate = useNavigate();

  function chooseClassName(index: number) {
    switch (index) {
    case 0:
      return styles.firstPopover;
    case 1:
      return styles.secondPopover;
    case 2:
      return styles.thirdPopover;
    case 3:
      return styles.fourthPopover;
    }
  }

  const openProduct = (path: string) => {
    navigate(path);
  };

  return (<div className={styles.container}>
    {products.map((product, index) => {
      return <div className={chooseClassName(index)} key={index}>
        <div className={styles.popoverButton}>
          <ButtonWithPopover
            forcedOpening={index === activeProduct}
            className={styles.popover}
            handleOpen={product.onClick}
            isLeft={index === 3}>
            <PopoverContainer
              title={product.title}
              variant={ButtonVariant.NewYorkPink}
              variantTablet={ButtonVariant.NewYorkPinkTotal}
              description={product.description}
              onClick={()=>{openProduct(product.path);}}/>
          </ButtonWithPopover>
        </div>
        {index === activeProduct && <Pointer className={styles.poiner}/>}
      </div>;
    })}
  </div>);
};

export default BiomeLactoLine;
