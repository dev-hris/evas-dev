import React from 'react';

import {CustomButton} from '../../../../components/customButton/CustomButton';
import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';
import {RoundButton} from '../../../../components/roundButton/RoundButton';

import {ReactComponent as ArrowIcon} from '../../../../assets/icons/arrow.svg';

import styles from './popoverContainer.module.scss';

type Props = {
  title: string;
  description: string;
  variant: ButtonVariant;
  variantTablet: ButtonVariant;
  onClick: () => void;
};

export const PopoverContainer: React.FunctionComponent<Props> = ({
  title,
  description,
  variant,
  variantTablet,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <RoundButton
          className={styles.buttonTablet}
          onClick={onClick}
          variant={variantTablet}
        >
          <ArrowIcon className={styles.evasBtnArrow}/>
        </RoundButton>
      </div>
      <div className={styles.description}>{description}</div>
      <CustomButton variant={variant} onClick={onClick} className={styles.button}>
        <>
          {'Подробнее'}
          <ArrowIcon className={styles.evasBtnArrow}/>
        </>
      </CustomButton>
    </div>
  );
};

export default PopoverContainer;
