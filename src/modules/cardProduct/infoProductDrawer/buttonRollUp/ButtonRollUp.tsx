import React from 'react';
import cn from 'classnames';
import {useInView} from 'react-intersection-observer';

import {ReactComponent as ArrowToTop} from '../../../../assets/icons/arrowToTop.svg';

import {CustomButton} from '../../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';

import styles from './buttonRollUp.module.scss';

type ButtonRollUpProps = {
  handleCLose: () => void
};

export const ButtonRollUp: React.FunctionComponent<ButtonRollUpProps> = ({handleCLose}) => {
  const {ref, inView} = useInView({
    threshold: 0,
  });
  return (
    <>
      <div className={cn(styles.btnRollUpFixedWrapper, {[styles.hidden]: inView})}>
        <CustomButton
          variant={ButtonVariant.Primary}
          className={styles.btnRollUpFixed}
          onClick={handleCLose}
        >
          <div className={styles.textBtnRollUp}>Свернуть всё</div>
        </CustomButton>
      </div>
      <div className={styles.btnRollUpWrapper} ref={ref}>
        <CustomButton
          variant={ButtonVariant.Primary}
          className={styles.btnRollUp}
          onClick={handleCLose}
        >
          <>
            <div className={styles.textBtnRollUp}>Свернуть всё</div>
            <ArrowToTop />
          </>
        </CustomButton>
      </div>
    </>
  );
};
