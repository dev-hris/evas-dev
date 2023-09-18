import React from 'react';

import {NavLink} from 'react-router-dom';

import {PATH} from '../../utils/constants/routeConstants';

import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as Loupe} from '../../assets/icons/loupe.svg';
import {ReactComponent as DropdownArrow} from '../../assets/icons/dropdownArrow.svg';

import {MobileMenu} from '../mobileMenu/MobileMenu';

import styles from './headerMain.module.scss';

export const HeaderMain: React.FunctionComponent = () => {
  return (<div className={styles.header}>
    <div className={styles.wrapper}>
      <div className={styles.leftSide}>
        <div className={styles.btnSearch} onClick={()=>{}}>
          <Loupe width={18} height={18}/>
        </div>
        <div className={styles.item}>
          Каталог
          <DropdownArrow className={styles.dropdownArrow}/>
        </div>
        <div className={styles.item}>
          Бренды
          <DropdownArrow className={styles.dropdownArrow}/>
        </div>
        <div className={styles.item}>Помощь в подборке</div>
      </div>
      <NavLink to={PATH.fraijour}>
        <Logo className={styles.logo}/>
      </NavLink>
      <div className={styles.rightSide}>
        <div className={styles.item}>О Вселенной</div>
        <div className={styles.item}>Обучение</div>
        <div className={styles.item}>Магазины партнеров</div>
      </div>
      <MobileMenu/>
    </div>
  </div>);
};

export default React.memo(HeaderMain);
