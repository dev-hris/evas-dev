import React from 'react';

import {ReactComponent as ArrowToDown} from '../../../assets/icons/arrowToDown.svg';
import backgroundMobile from '../../../assets/images/fraijourMain/main/mainBackgroundMobile.png';

import {TitleProduct} from '../titleProduct/TitleProduct';
import DoubleRoundButton from '../../../components/doubleRoundButton/DoubleRoundButton';
import {CustomButton} from '../../../components/customButton/CustomButton';
import {Preloader} from '../../../components/preloader/Preloader';

import {useAppDispatch} from '../../../redux/hooks';
import {showStories} from '../../../redux/stories/storiesSlice';

import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';

import {useImagePreloader} from '../../../utils/helpers/useImagePreloader';

import styles from './mainProductsMobile.module.scss';

type MainProductsMobileProps = {
  handleClickScroll: () => void;
};

export const MainProductsMobile: React.FC<MainProductsMobileProps> = ({
  handleClickScroll,
}) => {
  const dispatch = useAppDispatch();
  const {isPreloaded} = useImagePreloader([backgroundMobile], 500);
  const handleClick = () => {
    dispatch(showStories());
  };
  if(!isPreloaded) {
    return <Preloader className={styles.preloader} />;
  }
  return (
    <div className={styles.container}>
      <TitleProduct />
      <div className={styles.wrapperBtn}>
        <DoubleRoundButton
          variant={ButtonVariant.Primary}
          onClick={handleClickScroll}
        >
          <ArrowToDown className={styles.arrowToDown}/>
        </DoubleRoundButton>
      </div>
      <CustomButton
        className={styles.btn}
        variant={ButtonVariant.White}
        onClick={handleClick}
      >
        {'Смотреть продукты'}
      </CustomButton>
    </div>
  );
};
