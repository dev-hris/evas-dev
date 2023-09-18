import React, {useRef} from 'react';

import {VideoTraining} from '../../modules/videoTraining/VideoTraining';
import {ReviewsHome} from '../../modules/reviewsHome/ReviewsHome';
import AssistantBlock from '../../modules/assistantBlock/AssistantBlock';
import WelcomeBlock from '../../modules/welcomeBlock/WelcomeBlock';
import StoriesBlock from '../../modules/storiesBlock/StoriesBlock';
import ProductsPart from '../../modules/productsPart/ProductsPart';

import styles from './home.module.scss';

export const Home: React.FunctionComponent = () => {
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className={styles.container}>
      <div className={styles.headingWrapper}>
        <div className={styles.welcomeBlockWrapper}>
          <WelcomeBlock handleClickScroll={handleClick} />
        </div>
        <div className={styles.storiesBlockWrapper}>
          <StoriesBlock />
        </div>
      </div>
      <div className={styles.otherContentWrapper}>
        <AssistantBlock refScroll={ref} />
        <ProductsPart subtitle="новинки" title="Cамое последнее" />
        <div className={styles.line} />
        <ProductsPart subtitle="популярно" title="Лучшее для тебя" />
        <VideoTraining />
        <ReviewsHome />
      </div>
    </div>
  );
};

export default Home;
