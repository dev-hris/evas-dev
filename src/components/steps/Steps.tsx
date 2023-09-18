import React from 'react';

import {useAppSelector} from '../../redux/hooks';

import {Step} from './step/Step';

import styles from './steps.module.scss';

type StepsProps = {
};

export const Steps: React.FunctionComponent<StepsProps> = () => {
  const {storiesValue, activeStory} = useAppSelector(state => state.storiesSlice);

  return (
    <div className={styles.container}>
      {storiesValue.map(({index}) => (
        <Step key={index} step={index} activeStep={activeStory} />
      ))}
    </div>
  );
};
