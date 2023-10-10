import React from 'react';
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

import {FraijourMenu} from '../../../utils/constants/menu';

import styles from './navLinksHeader.module.scss';

type NavLinkItemsProps = {
  item: {
    title: string;
    link: string;
    variant: FraijourMenu;
  };
};

const classNamesButton = new Map([
  [FraijourMenu.AquaForest, styles.buttonAquaForest],
  [FraijourMenu.GreenSmoke, styles.buttonGreenSmoke],
  [FraijourMenu.Indigo, styles.buttonIndigo],
  [FraijourMenu.NewYorkPink, styles.buttonNewYorkPink],
  [FraijourMenu.Portage, styles.buttonPortage],
  [FraijourMenu.Ronchi, styles.buttonRonchi],
]);

const classNamesactiveButton = new Map<FraijourMenu, string>([
  [FraijourMenu.AquaForest, styles.buttonActiveAquaForest],
  [FraijourMenu.GreenSmoke, styles.buttonActiveGreenSmoke],
  [FraijourMenu.Indigo, styles.buttonActiveIndigo],
  [FraijourMenu.NewYorkPink, styles.buttonActiveNewYorkPink],
  [FraijourMenu.Portage, styles.buttonActivePortage],
  [FraijourMenu.Ronchi, styles.buttonActiveRonchi],
]);

export const NavLinkHeader: React.FunctionComponent<NavLinkItemsProps> = ({
  item,
}) => {
  return (
    <NavLink
      key={item.title}
      className={({isActive, isPending}) =>
        cn(
          isActive && classNamesactiveButton.get(item.variant),
          styles.button,
          styles.link,
          classNamesButton.get(item.variant),
        )
      }
      to={item.link}
    >
      <p>{item.title}</p>
      <div className={styles.line}></div>
    </NavLink>
  );
};
