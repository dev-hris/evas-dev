import React, {useEffect} from 'react';
import {NavLink} from 'react-router-dom';

import {UseMouseOutside} from '../../../../utils/helpers/useMouseOutside';

import styles from './additionalMenu.module.scss';

type Props = {
  closeMenu: ()=> void;
  items: {
    title: string;
    link: string;
  }[];
}

export const AdditionalMenu: React.FunctionComponent<Props> = ({
  closeMenu,
  items,
}) => {
  const containerRef = React.useRef(null);
  const mouseOutside = UseMouseOutside(containerRef);

  useEffect(()=>{
    if (mouseOutside) {
      closeMenu();
    }
  }, [mouseOutside]);

  return (<>
    <div className={styles.block}>
      <div className={styles.round}></div>
      <div className={styles.padding}></div>
    </div>
    <div className={styles.additionalMenu} ref={containerRef}>
      {items.map((item, index) => {
        return <NavLink key={index} className={styles.item} to={item.link}>
          {item.title}
        </NavLink>;
      })}
    </div>
  </>);
};
