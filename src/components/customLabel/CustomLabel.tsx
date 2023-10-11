import React from 'react';

import cn from 'classnames';

import styles from './customLabel.module.scss';

type CustomLabelProps = {
  title: string;
  className?: string;
  lineProduct?: string;
}


export const CustomLabel: React.FunctionComponent<CustomLabelProps> = ({
  title, lineProduct, className,
}) => {
  return (
    <div className={cn(
      styles.container, className,
      lineProduct ? styles[lineProduct] : styles.default,
    )}>
      <div className={styles.title}>
        {title}
      </div>
    </div>
  );
};
