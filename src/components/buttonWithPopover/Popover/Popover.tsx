import React, {ReactElement, useEffect} from 'react';
import cn from 'classnames';

import {ReactComponent as LineToRight} from '../../../assets/icons/lineToRight.svg';
import {ReactComponent as LineToLeft} from '../../../assets/icons/lineToLeft.svg';

import {UseMouseOutside} from '../../../utils/helpers/useMouseOutside';

import styles from './popover.module.scss';

type PopoverProps = {
  children?: ReactElement;
  className?: string;
  handleClose: ()=>void;
  isLeft?: boolean;
}

export const Popover: React.FunctionComponent<PopoverProps> = ({
  children,
  className,
  handleClose,
  isLeft = false}) => {
  const containerRef = React.useRef(null);
  const mouseOutside = UseMouseOutside(containerRef);
  useEffect(()=>{
    if (mouseOutside) {
      handleClose();
    }
  }, [mouseOutside]);

  return (
    <div className={isLeft ? styles.popoverContainerLeft : styles.popoverContainerRight}>
      <div className={styles.wrapper}>
        {isLeft ?
          <LineToLeft className={styles.line}/>
          : <LineToRight className={styles.line}/>}
        <div ref={containerRef} className={cn(className, styles.popover)}>
          <div className={styles.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popover;
