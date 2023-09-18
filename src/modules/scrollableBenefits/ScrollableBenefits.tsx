import React, {useState} from 'react';

import styles from './scrollableBenefits.module.scss';

import {Benefits} from './Benefits/Benefits';

type Props = {
    title: string;
    description: string;
    firstBenefitTitle: string;
    firstBenefit: string;
    secondBenefitTitle: string;
    secondBenefit: string;
    thirdBenefitTitle: string;
    thirdBenefit: string;
}

export const ScrollableBenefits: React.FunctionComponent<Props> = ({
  title,
  description,
  firstBenefitTitle,
  firstBenefit,
  secondBenefitTitle,
  secondBenefit,
  thirdBenefitTitle,
  thirdBenefit}) => {

  const [benefits, _] = useState([
    {id: 0, title: firstBenefitTitle, description: firstBenefit},
    {id: 1, title: secondBenefitTitle, description: secondBenefit},
    {id: 2, title: thirdBenefitTitle, description: thirdBenefit},
  ]);
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
        <h1 className={styles.title}>Retine-Collagen <br /> 3D Core</h1>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.content}>
        {benefits.map(({title, description, id}) => (
          <Benefits
            key={id}
            id={id}
            title={title}
            description={description}
            activeId={queueActiveId[0]}
            setActiveId={changeActiveId}
          />
        ))}
      </div>
    </div>
  </div>);
};
