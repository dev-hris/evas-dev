import React from 'react';
import cn from 'classnames';

import {NavLink} from 'react-router-dom';

import {PATH} from '../../utils/constants/routeConstants';

import {ReactComponent as Logo} from '../../assets/icons/logo.svg';
import {ReactComponent as Loupe} from '../../assets/icons/loupe.svg';

import {MobileMenu} from '../mobileMenu/MobileMenu';

import {NavLinksHeader} from './navLinksHeader/NavLinksHeader';

import styles from './headerBrand.module.scss';

export const HeaderBrand: React.FunctionComponent = () => {
  return (<div className={styles.header}>
    <div className={styles.wrapper}>
      <NavLink to={PATH.home}>
        <Logo className={styles.logo}/>
      </NavLink>
      <div className={styles.searchLinksWrapper}>
        <div className={styles.search}>
          <button className={cn(styles.button, styles.btnSearch)} onClick={()=>{}}>
            <Loupe/>
          </button>
        </div>
        <NavLinksHeader/>
        <MobileMenu />
      </div>
    </div>
  </div>);
};

export default React.memo(HeaderBrand);
