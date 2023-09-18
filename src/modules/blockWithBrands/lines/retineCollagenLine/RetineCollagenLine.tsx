import React from 'react';
import {useNavigate} from 'react-router-dom';

import ButtonWithPopover from '../../../../components/buttonWithPopover/ButtonWithPopover';
import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';
import {PopoverContainer} from '../popoverContainer/PopoverContainer';
import {ReactComponent as Pointer} from '../../../../assets/icons/circlePointer.svg';

import {IProduct} from '../../../../utils/types/types';

import styles from './retineCollagenLine.module.scss';

type Props = {
  activeProduct: number;
  products: IProduct[];
}

export const RetineCollagenLine: React.FunctionComponent<Props> = ({
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
            isLeft={index === 3 || index === 4}>
            <PopoverContainer
              title={product.title}
              variant={ButtonVariant.Portage}
              variantTablet={ButtonVariant.PortageTotal}
              description={product.description}
              onClick={()=>{openProduct(product.path);}}/>
          </ButtonWithPopover>
        </div>
        {index === activeProduct && <Pointer className={styles.poiner}/>}
      </div>;
    })}
  </div>);
};

export default RetineCollagenLine;
