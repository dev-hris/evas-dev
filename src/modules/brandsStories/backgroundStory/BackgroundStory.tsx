import React from 'react';

import {useAppSelector} from '../../../redux/hooks';
import {getActiveStoryUrls} from '../../../redux/stories/storiesSlice';

import styles from './backgroundStory.module.scss';

export const BackgroundStory = () => {
  const activeStory = useAppSelector(state => state.storiesSlice.activeStory);
  const {backgroundUrl, bottleUrl} = useAppSelector(getActiveStoryUrls(activeStory));
  return (
    <>
      <img className={styles.backgroundImg} src={backgroundUrl} alt="" />
      <img className={styles.bottleImg} src={bottleUrl} alt="" />
    </>
  );
};
