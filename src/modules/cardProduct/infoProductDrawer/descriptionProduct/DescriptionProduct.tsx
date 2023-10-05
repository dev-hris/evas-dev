import React from 'react';
import cn from 'classnames';

import {ReactComponent as TickUp} from '../../../../assets/icons/tickDown.svg';

import {CustomButton} from '../../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';
import {IProduct} from '../../../../redux/interfaces';

import {splitStringByBr} from '../../../../utils/helpers/splitString';

import styles from './descriptionProduct.module.scss';

type DescriptionProductProps = {
  isActiveDescription: boolean;
  handleDescriptionDrawer: (flag: boolean) => void;
  product: IProduct;
}


export const DescriptionProduct: React.FunctionComponent<DescriptionProductProps> = ({
  isActiveDescription,
  handleDescriptionDrawer,
  product,
}) => {
  const openDescription = () => {
    handleDescriptionDrawer(true);
  };

  const closeDescription = () => {
    handleDescriptionDrawer(false);
  };
  return (
    <div className={styles.container}>
      <div className={cn(styles.title, {[styles.active]: isActiveDescription})}>
        <div className={styles.textTitle}>
          Полное описание
        </div>
        <CustomButton
          className={cn(styles.btnClose)}
          onClick={closeDescription}
          variant={ButtonVariant.WhiteDolphin}
        >
          <TickUp />
        </CustomButton>
      </div>
      <div className={styles.shortDescription}>
        Абсолютный уход за кожей: сила синергии 7
        коллагенов заполняет кожу и повышает выработку коллагена
      </div>
      <CustomButton
        className={cn(styles.btnDescription, {[styles.active]: isActiveDescription})}
        onClick={openDescription}
        variant={ButtonVariant.OutLine}
      >
        полное описание
      </CustomButton>
      <div className={cn(styles.fullDescription, {[styles.active]: isActiveDescription})}>
        <div className={styles.line} />
        <div className={styles.volume}>
          <div className={styles.titleVolume}>
            Объем
          </div>
          <div className={styles.valueVolume}>
            200 мл
          </div>
        </div>
        <div className={styles.line} />
        <p>
          {splitStringByBr(product.description).map((part, id) =>
            <div key={id}>
              {part}
              <br/>
            </div>)}
        </p>
      </div>
    </div>
  );
};
