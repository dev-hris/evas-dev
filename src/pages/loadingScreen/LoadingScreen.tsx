import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {useImagePreloader} from '../../utils/helpers/useImagePreloader';

import {ReactComponent as Logo} from '../../assets/icons/logoWithoutText.svg';
import {ReactComponent as TextLogo} from '../../assets/icons/textInLogo.svg';
import background from '../../assets/images/fraijourMain/main/mainBackground.png';

import styles from './loadingScreen.module.scss';

export const LoadingScreen = () => {
  const [isEndAnimation, setIsEndAnimation] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    // TODO: добавить isLoading запросов (когда появятся запросы).
    if(isEndAnimation) {
      navigate('/');
    }
  }, [isEndAnimation]);
  const onAnimationEnd = () => {
    setIsEndAnimation(true);
  };
  const {isPreloaded} = useImagePreloader([background]);
  if(!isPreloaded) {
    return null;
  }

  return (
    <div className={styles.container}>
      <img alt="background" src={background} className={styles.backgroundImg} />
      <div className={styles.logoWithTextWrapper}>
        <div className={styles.logoWrapper}>
          <Logo />
        </div>
        <div
          onAnimationEnd={onAnimationEnd}
          className={styles.textLogoWrapper}
        >
          <TextLogo />
        </div>
      </div>
    </div>
  );
};
