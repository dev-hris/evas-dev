import React from 'react';

import styles from './item.module.scss';

type Props = {
  title: string;
  image: string;
};

export const Item: React.FunctionComponent<Props> = (props) => {
  const {title, image} = props;

  return (
    <div className={styles.item}>
      <p className={styles.title}>{title}</p>
      <img className={styles.image} src={image} alt="" />
    </div>
  );
};
