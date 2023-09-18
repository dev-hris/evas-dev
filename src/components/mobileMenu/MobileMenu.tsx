import React, {useState, useEffect} from 'react';
import cn from 'classnames';

import {NavLink} from 'react-router-dom';

import {ReactComponent as DotsNine} from '../../assets/icons/dotsNine.svg';
import {ReactComponent as LogoMain} from '../../assets/icons/logoMobile.svg';
import {ReactComponent as Cross} from '../../assets/icons/cross.svg';

import {CustomButton} from '../customButton/CustomButton';

import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import {fraijourMenu} from '../../utils/constants/menu';

import styles from './mobileMenu.module.scss';

export const MobileMenu = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, [isShow]);
  const handleShow = () => {
    setIsShow(true);
  };

  const handleHide = () => {
    setIsShow(false);
  };
  return (
    <>
      <div className={styles.menuSvg} onClick={handleShow}>
        <DotsNine />
      </div>
      <div className={cn(styles.menu, {[styles.active]: isShow})}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <LogoMain />
          </div>
          <CustomButton
            onClick={handleHide}
            variant={ButtonVariant.OutLine}
            className={styles.btnCLose}
          >
            <Cross />
          </CustomButton>
        </div>
        <div className={styles.line} />
        <div className={styles.content}>
          <div className={styles.title}>Линейки _</div>
          <div className={styles.linksWrapper}>
            {fraijourMenu.map((item) => (
              <NavLink
                onClick={handleHide}
                key={item.title}
                className={({isActive}) =>
                  cn(styles.link, {[styles.active]: isActive})
                }
                to={item.link}
              >{item.title}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
