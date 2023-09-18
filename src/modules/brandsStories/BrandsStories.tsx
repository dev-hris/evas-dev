import React, {useCallback, useEffect} from 'react';
import cn from 'classnames';

import {RoundButton} from '../../components/roundButton/RoundButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {Steps} from '../../components/steps/Steps';

import {ReactComponent as Cross} from '../../assets/icons/cross.svg';

import {useAppDispatch} from '../../redux/hooks';

import {checkoutStory, hideStories} from '../../redux/stories/storiesSlice';

import {BodyStory} from './bodyStory/BodyStory';

import styles from './brandsStories.module.scss';

export const BrandsStories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      dispatch(checkoutStory(0));
      document.body.style.overflowY = 'scroll';
    };
  }, [dispatch]);
  const handleClick = useCallback(() => {
    dispatch(hideStories());
  }, [dispatch]);
  return (
    <div className={cn(styles.container)}>
      <div className={styles.header}>
        <Steps />
        <RoundButton
          className={styles.btnClose}
          onClick={handleClick}
          variant={ButtonVariant.OutLine}
        >
          <Cross />
        </RoundButton>
      </div>
      <BodyStory />
    </div>
  );
};
