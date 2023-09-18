import React, {ReactElement, useEffect, useState} from 'react';

import {DoubleRoundButton} from '../doubleRoundButton/DoubleRoundButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import {ReactComponent as Cross} from '../../assets/icons/cross.svg';
import {ReactComponent as Plus} from '../../assets/icons/plus.svg';

import Popover from './Popover/Popover';

import styles from './buttonWithPopover.module.scss';

type PopoverProps = {
  children?: ReactElement;
  className?: string;
  handleOpen?: () => void;
  handleClose?: () => void;
  forcedOpening?: boolean;
  isLeft?: boolean;
}

export const ButtonWithPopover: React.FunctionComponent<PopoverProps> = ({
  children,
  className,
  handleOpen,
  handleClose,
  forcedOpening = false,
  isLeft = false}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (forcedOpening) {
      setIsOpen(true);
    }
  }, [forcedOpening]);

  const openPopover = () => {
    setIsOpen(true);
    handleOpen && handleOpen();
  };

  const closePopover = () => {
    setIsOpen(false);
    handleClose && handleClose();
  };

  return (
    <div
      className={styles.buttonPopover}
    >
      <DoubleRoundButton
        variant={ButtonVariant.Light}
        isShowBorder={true}
        onClick={isOpen? closePopover : openPopover}
        className={styles.button}>
        {isOpen ? <Cross/> : <Plus/>}
      </DoubleRoundButton>
      {isOpen &&
        <Popover  handleClose={closePopover} className={className} isLeft={isLeft}>
          {children}
        </Popover>
      }
    </div>
  );
};

export default ButtonWithPopover;
