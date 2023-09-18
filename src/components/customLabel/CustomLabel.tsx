import React from 'react';

import cn from 'classnames';

import styles from './customLabel.module.scss';

type CustomLabelProps = {
  title: string;
  className?: string;
}

export const CustomLabel: React.FunctionComponent<CustomLabelProps> = ({title, className}) => {
  return (
    <div className={cn(styles.container, className)}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
};
