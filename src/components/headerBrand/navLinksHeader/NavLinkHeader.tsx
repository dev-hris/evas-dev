import React from 'react';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import styles from './navLinksHeader.module.scss';

type NavLinkItemsProps = {
  item: {
    title: string;
    link: string;
  };
};

export const NavLinkHeader: React.FunctionComponent<NavLinkItemsProps> = ({
  item,
}) => {
  return (
    <NavLink
      key={item.title}
      className={({isActive, isPending}) =>
        cn(isActive && styles.buttonActive, styles.button, styles.link)
      }
      to={item.link}
    >
      <p>{item.title}</p>
      <div className={styles.line}></div>
    </NavLink>
  );
};
