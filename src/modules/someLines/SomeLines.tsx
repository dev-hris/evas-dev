import React from 'react';

import yuzuHoneyLine from '../../assets/images/fraijourMain/productLine/yuzuHoneyLine.jpg';
import originalHerbWormwoodLine
  from '../../assets/images/fraijourMain/productLine/originalHerbWormwoodLine.jpg';

import {Item} from './item/Item';

import styles from './someLines.module.scss';

export const SomeLines: React.FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Другие линейки <span className={styles.titleAccent}>Frajour</span>
      </h2>
      <div className={styles.grid}>
        <Item title={'Yuzu Honey'} image={yuzuHoneyLine} />
        <Item title={'Original Herb Wormwood'} image={originalHerbWormwoodLine} />
      </div>
    </div>
  );
};
