import React, {useState, useEffect} from 'react';

import {ReactComponent as Globe} from '../../assets/icons/globe.svg';
import {ReactComponent as MouseInHome} from '../../assets/icons/mouseInHouse.svg';
import WelcomeGifDesktop from '../../assets/gifs/welcomeDesktop.gif';
import WelcomeGifMobile from '../../assets/gifs/welcomeMobile.gif';

import {CustomButton} from '../../components/customButton/CustomButton';

import {useResize} from '../../utils/helpers/useResize';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import BrandsCarousel from './brandsCarousel/BrandsCarousel';

import styles from './welcomeBlock.module.scss';

type WelcomeBlockProps = {
  handleClickScroll: () => void
}

const WelcomeBlock: React.FunctionComponent<WelcomeBlockProps> = ({
  handleClickScroll,
}) => {
  const [gif, setGif] = useState<string>(WelcomeGifDesktop);
  const screenWidth = useResize();

  useEffect(() => {
    if (screenWidth < 1024 && gif !== WelcomeGifMobile) {
      setGif(WelcomeGifMobile);
    }
    else if (screenWidth >= 1024 && gif === WelcomeGifMobile) {
      setGif(WelcomeGifDesktop);
    }
  }, [screenWidth]);

  return (
    <div className={styles.container}>
      <div className={styles.homeHeading}>
        <div className={styles.title}>
          <div className={styles.firstLine}>
            <Globe className={styles.iconGlobe}/>
            <span>Открой для себя</span>
          </div>
          <div className={styles.secondLine}>
        вселенную
            <span className={styles.label}> Evas</span>
          </div>
          <div className={styles.thirdLine}>
        с основательницей концерна
          </div>
          <div className={styles.fourthLine}>
        Сельгой
          </div>
        </div>
        <img src={gif} alt="" className={styles.backgroundVideo}/>
        <BrandsCarousel/>
      </div>
      <CustomButton
        onClick={handleClickScroll}
        variant={ButtonVariant.White}
        className={styles.mouseBtn}
      >
        <MouseInHome />
      </CustomButton>
    </div>
  );
};

export default WelcomeBlock;
