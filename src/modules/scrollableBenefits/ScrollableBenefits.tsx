import React, {useState} from 'react';

import {splitStringByBr} from '../../utils/helpers/splitString';

import styles from './scrollableBenefits.module.scss';

import {Benefits} from './Benefits/Benefits';

type Props = {
    title: string;
    description: string;
    benefitsList: {value: string; definition: string}[];
    lineProduct: string | undefined;
}

export const ScrollableBenefits: React.FunctionComponent<Props> = ({
  title,
  description,
  lineProduct,
  benefitsList}) => {
  const [queueActiveId, setQueueActiveId] = useState<number[]>([0]);

  const changeActiveId = (id: number, isView: boolean) => {
    if(!isView) {
      setQueueActiveId((pr) => pr.filter(v => v !== id));
      return;
    }
    setQueueActiveId((pr) => [...pr, id].sort());

  };

  return (<div className={styles.container}>
    <div className={styles.wrapper}>
      <div className={styles.side}>
        <h1 className={styles.title}>{splitStringByBr(title)}</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.content}>
        {benefitsList.map((benefit, id) => (
          <Benefits
            key={id}
            id={id}
            title={benefit.value}
            description={benefit.definition}
            lineProduct={lineProduct}
            activeId={queueActiveId[0]}
            setActiveId={changeActiveId}
          />
        ))}
      </div>
    </div>
  </div>);
};
