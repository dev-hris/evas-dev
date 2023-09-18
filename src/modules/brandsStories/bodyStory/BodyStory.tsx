import React from 'react';

import {useAppDispatch} from '../../../redux/hooks';
import {
  nextStory,
  previousStory,
} from '../../../redux/stories/storiesSlice';

import {ContentStory} from '../contentStory/ContentStory';
import {BackgroundStory} from '../backgroundStory/BackgroundStory';


import styles from './bodyStory.module.scss';

export const BodyStory = () => {
  const dispatch = useAppDispatch();
  const handleClickNextStory = () => {
    dispatch(nextStory());
  };
  const handleClickPreviousStory = () => {
    dispatch(previousStory());
  };
  return (
    <div className={styles.container}>
      <BackgroundStory />
      <div
        className={styles.previousStory}
        onClick={handleClickPreviousStory}
      />
      <div
        className={styles.nextStory}
        onClick={handleClickNextStory}
      />
      <ContentStory />
    </div>
  );
};
