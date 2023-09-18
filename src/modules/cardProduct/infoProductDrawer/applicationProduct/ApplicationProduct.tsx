import React from 'react';
import cn from 'classnames';

import {ReactComponent as TickUp} from '../../../../assets/icons/tickDown.svg';

import {CustomButton} from '../../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';

import styles from './applicationProduct.module.scss';

type ApplicationProductProps = {
  isActiveApplication: boolean;
  handleApplicationDrawer: (flag: boolean) => void;
}

export const ApplicationProduct: React.FunctionComponent<ApplicationProductProps> = ({
  isActiveApplication,
  handleApplicationDrawer,
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
          Сделайте кожу более эластичной, используя липосомы! Благодаря новому липосомному типу
          ретинола, он воздействует на кожу эффективнее и стабильнее, чем ретинол.
        <br /><br />
          Наполнение, подтягивание и поддержание эластичности кожи благодаря 3 видам
          коллагена Коллаген Attelo, водорастворимый коллаген, жирорастворимый коллаген.
        <br /><br />
          7 комплексов коллагена, которые впитываются непосредственно в кожу Микромаломолекулярный
          коллаген 4-го поколения размером с 170 000 волоса глубоко впитывается в кожу и удерживает
          разрушенное ядро кожи 9 видов пептидов.
      </div>
    </div>
  );
};
