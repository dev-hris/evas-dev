import React, {ReactElement} from 'react';
import cn from 'classnames';

import HeaderBrand from '../components/headerBrand/HeaderBrand';
import HeaderMain from '../components/headerMain/HeaderMain';

import {LayoutVariant} from '../utils/constants/layoutVariantEnum';

import styles from './layout.module.scss';

type LayoutProps = {
  variant: LayoutVariant;
  children: ReactElement;
};

const layouts = {
  [LayoutVariant.Main]: {
    header: <HeaderMain />,
    className: styles.main,
  },
  [LayoutVariant.Brand]: {
    header: <HeaderBrand />,
    className: styles.mainBrand,
  },
};

export const Layout: React.FunctionComponent<LayoutProps> = ({
  variant,
  children,
}) => {
  const {className, header} = layouts[variant];
  return (
    <div className={styles.layout}>
      {header}
      <main className={className}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
