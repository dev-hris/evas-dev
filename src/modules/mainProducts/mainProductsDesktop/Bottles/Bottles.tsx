import React, {useCallback} from 'react';
import cn from 'classnames';

import {Product} from '../product/Product';

import {IBottle} from '../../../../utils/types/types';

import styles from './bottles.module.scss';

type BottlesProps = {
  activeProduct: number;
  setActiveProduct: (value: number) => void;
  bottles: IBottle[];
  isActive: boolean;
};

export const Bottles: React.FunctionComponent<BottlesProps> = ({
  activeProduct,
  setActiveProduct,
  bottles,
  isActive,
}) => {
  const setActiveProductCallback = useCallback(setActiveProduct, [setActiveProduct]);
  return (
    <div className={styles.container}>
      <div className={cn(styles.wrapper, {
        [styles.active]: isActive,
      })}>
        {bottles.map((bottle, index) => (
          <Product
            key={index}
            bottle={bottle}
            index={index}
            setActiveProduct={setActiveProductCallback}
          />
        ))}
      </div>
    </div>
  );
};
