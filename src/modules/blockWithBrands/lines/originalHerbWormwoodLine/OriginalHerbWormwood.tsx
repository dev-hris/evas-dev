import React from 'react';
import {useNavigate} from 'react-router-dom';

import ButtonWithPopover from '../../../../components/buttonWithPopover/ButtonWithPopover';
import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';
import {PopoverContainer} from '../popoverContainer/PopoverContainer';
import {ReactComponent as Pointer} from '../../../../assets/icons/circlePointer.svg';

import {IProduct} from '../../../../utils/types/types';

import styles from './originalHerbWormwoodLine.module.scss';

type Props = {
  activeProduct: number;
  products: IProduct[];
}

export const OriginalHerbWormwoodLine: React.FunctionComponent<Props> = ({
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
    case 4:
      return styles.fifthPopover;
    case 5:
      return styles.sixthPopover;
    case 6:
      return styles.seventhPopover;
    case 7:
      return styles.eighthPopover;
    case 8:
      return styles.ninthPopover;
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
            className={styles.popover}
            forcedOpening={index === activeProduct}
            handleOpen={product.onClick}
            isLeft={index === 5 || index === 6 || index === 7 || index === 8}>
            <PopoverContainer
              title={product.title}
              variant={ButtonVariant.AquaForest}
              variantTablet={ButtonVariant.AquaForestTotal}
              description={product.description}
              onClick={()=>{openProduct(product.path);}}/>
          </ButtonWithPopover>
        </div>
        {index === activeProduct && <Pointer className={styles.poiner}/>}
      </div>;
    })}
  </div>);
};

export default OriginalHerbWormwoodLine;
