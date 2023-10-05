import React from 'react';
import cn from 'classnames';

import {ReactComponent as TickUp} from '../../../../assets/icons/tickDown.svg';

import {CustomButton} from '../../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';

import {splitStringByBr} from '../../../../utils/helpers/splitString';
import {IProduct} from '../../../../redux/interfaces';

import styles from './applicationProduct.module.scss';

type ApplicationProductProps = {
  isActiveApplication: boolean;
  handleApplicationDrawer: (flag: boolean) => void;
  product: IProduct;
}

export const ApplicationProduct: React.FunctionComponent<ApplicationProductProps> = ({
  isActiveApplication,
  handleApplicationDrawer,
  product,
}) => {
  const openApplication = () => {
    handleApplicationDrawer(true);
  };
  const closeApplication = () => {
    handleApplicationDrawer(false);
  };
  return (
    <div
      className={styles.container}
    >
      <div className={styles.title}>
        <div
          className={styles.textTitle}
          onClick={openApplication}
        >
          Применение
        </div>
        <CustomButton
          className={cn(styles.btnClose, {[styles.active]: isActiveApplication})}
          onClick={closeApplication}
          variant={ButtonVariant.WhiteDolphin}
        >
          <TickUp />
        </CustomButton>
      </div>
      <div className={cn(styles.descriptionApplication, {[styles.active]: isActiveApplication})}>
        {splitStringByBr(product.content).map((part, id) =>
          <div key={id}>
            {part}
            <br/>
          </div>)}.
      </div>
    </div>
  );
};
