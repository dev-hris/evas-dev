import React from 'react';
import {Link} from 'react-router-dom';

import {ReactComponent as ArrowToRight} from '../../assets/icons/arrowToRight.svg';

import {ThemesWithVideo} from './themesWithVideo/ThemesWithVideo';

import styles from './videoTraining.module.scss';

export const VideoTraining = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.textInteresting}>Интересно</div>
        <div className={styles.titleWrapper}>
          <div className={styles.textTitle}>Видео обучение</div>
          <Link to={''} className={styles.linkTitle}>
            <div>Все учебные материалы</div>
            <div className={styles.arrow}>
              <ArrowToRight />
            </div>
          </Link>
        </div>
      </div>
      <ThemesWithVideo />
      <Link to={''} className={styles.linkMobile}>
        <div>Все учебные материалы</div>
        <div className={styles.arrow}>
          <ArrowToRight />
        </div>
      </Link>
    </div>
  );
};
