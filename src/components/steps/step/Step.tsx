import React, {useEffect} from 'react';
import cn from 'classnames';

import {useAppDispatch} from '../../../redux/hooks';
import {nextStory} from '../../../redux/stories/storiesSlice';

import styles from './step.module.scss';

type StepProps = {
  activeStep: number;
  step: number;
}

export const Step: React.FunctionComponent<StepProps> = ({activeStep, step}) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(nextStory());
    }, 5000);
    return () => clearTimeout(timer);
  });
  return (
    <div className={styles.container}>
      <div
        className={cn(styles.activeProgress, {
          [styles.show]: activeStep > step,
          [styles.showAnimation]: activeStep === step,
        })}
      />
    </div>
  );
};
