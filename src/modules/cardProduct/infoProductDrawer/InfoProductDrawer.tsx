import React from 'react';
import cn from 'classnames';

import {IProduct} from '../../../redux/interfaces';

import {ButtonRollUp} from './buttonRollUp/ButtonRollUp';

import {DescriptionProduct} from './descriptionProduct/DescriptionProduct';
import {ApplicationProduct} from './applicationProduct/ApplicationProduct';

import styles from './infoProductDrawer.module.scss';

export type InfoProductDrawerProps = {
  values: {
    description: {
        isActiveDescription: boolean;
        handleDescriptionDrawer: (flag: boolean) => void;
        product: IProduct;
    };
    application: {
        isActiveApplication: boolean;
        handleApplicationDrawer: (flag: boolean) => void;
        product: IProduct;
    };
  }
  handleClose: () => void;
}

export const InfoProductDrawer: React.FunctionComponent<InfoProductDrawerProps> = ({
  values,
  handleClose,
}) => {
  const {description, application} = values;
  return (
    <div className={cn(styles.container)}>
      <DescriptionProduct {...description} />
      <ApplicationProduct {...application} />
      {
        (description.isActiveDescription || application.isActiveApplication) &&
        <ButtonRollUp handleCLose={handleClose} />
      }
    </div>
  );
};
