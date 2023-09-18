import React from 'react';

import {useAppSelector} from '../../../redux/hooks';

import ThemeForVideo from './themeForVideo/ThemeForVideo';
import {VideoTutorial} from './videoTutorial/VideoTutorial';

import styles from './themesWithVideo.module.scss';

export const ThemesWithVideo = () => {
  const {themes} = useAppSelector((state) => state.videoTrainingSlice);
  return (
    <div className={styles.container}>
      <div className={styles.themesWrapper}>
        {
          themes.map((theme) =>
            <ThemeForVideo key={theme.id} theme={theme} />,
          )
        }
      </div>
      <VideoTutorial />
    </div>
  );
};
