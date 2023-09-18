import React, {useRef, ReactElement, useEffect} from 'react';
import cn from 'classnames';

import styles from './drawer.module.scss';

type DrawerProps = {
  className?: string;
  children?: ReactElement;
  activeBlocks: boolean[];
  end?: (v: boolean) => void;
  handleClick?: () => void;
}

export const Drawer: React.FunctionComponent<DrawerProps> = ({
  className,
  children,
  activeBlocks,
  end,
  handleClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const isNotActive = activeBlocks.every((block) => !block);
    if (!ref.current) {
      return;
    }
    if(isNotActive) {
      ref.current.style.transition = '0.5s';
      ref.current.style.top = '';
    } else {
      ref.current.style.transition = '0.5s';
      ref.current.style.top = '175px';
    }
  }, [activeBlocks]);
  const touchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const top = e.touches[0].pageY;
    if (top <= 175) {
      return;
    }
    if(ref.current) {
      ref.current.style.top = `${top}px`;
    }
  };

  const touchStart = () => {
    if (ref.current) {
      ref.current.style.transition = '';
    }
  };

  const onClick = () => {
    handleClick && handleClick();
  };

  const touchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const top = e.changedTouches[0].pageY;
    if (!ref.current) {
      return;
    }
    ref.current.style.transition = '0.5s';
    if(top > 400) {
      end && end(true);
      ref.current.style.top = '';
      return;
    }
    end && end(false);
    ref.current.style.top = '175px';
  };

  return (
    <div ref={ref} className={cn(styles.container, className)}>
      <div
        onTouchMove={touchMove}
        onTouchEnd={touchEnd}
        onTouchStart={touchStart}
        className={styles.toucher}
        onClick={onClick}
      >
        <div className={styles.ellipseToucher} />
      </div>
      {children}
    </div>
  );
};
