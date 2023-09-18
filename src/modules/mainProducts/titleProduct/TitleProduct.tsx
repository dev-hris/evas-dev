import React, {useRef} from 'react';
import cn from 'classnames';

import DoubleRoundButton from '../../../components/doubleRoundButton/DoubleRoundButton';
import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';

import {ReactComponent as ArrowToDown} from '../../../assets/icons/arrowToDown.svg';
import {ReactComponent as LogoMain} from '../../../assets/icons/logoMain.svg';

import styles from './titleProduct.module.scss';

type TitleProductProps = {
  isActive?: boolean;
  handleClickScroll?: () => void;
};

export const TitleProduct: React.FunctionComponent<TitleProductProps> = ({
  isActive,
  handleClickScroll,
}) => {
  const cursor = useRef<any>(null);
  const changePosition = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    cursor.current.style.display = 'block';
    cursor.current.style.top = `${e.clientY}px`;
    cursor.current.style.left = `${e.clientX}px`;
  };
  const onMouseLeave = () => {
    cursor.current.style.display = 'none';
  };
  const handleClick = () => {
    cursor.current.style.display = 'none';
    handleClickScroll && handleClickScroll();
  };
  return (
    <div
      className={cn(styles.container, {[styles.active]: isActive})}
      onMouseMove={changePosition}
      onMouseLeave={onMouseLeave}
      onClick={handleClick}
    >
      <div className={styles.cursorContainer} ref={cursor}>
        <DoubleRoundButton variant={ButtonVariant.Primary} onClick={() => {}}>
          <ArrowToDown className={styles.arrowToDown}/>
        </DoubleRoundButton>
      </div>
      <div className={cn(styles.infoContainer)}>
        <div className={styles.logoWrapper}>
          <LogoMain />
        </div>
        <div className={styles.textWrapper}>
          Это правильное решение для сохранения молодости кожи. Плотная кожа
          снаружи и упругая внутри благодаря синергии 7 видов коллагена.
        </div>
      </div>
    </div>
  );
};
