import React, {useEffect} from 'react';
import cn from 'classnames';
import {useInView} from 'react-intersection-observer';


import styles from './benefits.module.scss';

type BenefitsProps = {
  title: string;
  description: string;
  id: number;
  activeId: number;
  setActiveId: (id: number, isView: boolean) => void;
}

export const Benefits: React.FunctionComponent<BenefitsProps> = ({
  title,
  description,
  id,
  activeId,
  setActiveId,
}) => {
  const {ref, inView} = useInView({
    threshold: [1],
  });
  useEffect(() => {
    setActiveId(id, inView);
  }, [inView]);
  return (
    <div ref={ref} className={styles.benefit}>
      <h3 className={cn(
        styles.benefitTitle,
        {[styles.active]: id === activeId},
      )}>
        {title}
      </h3>
      <p className={styles.benefitDescription}>
        {description}
      </p>
    </div>
  );
};
