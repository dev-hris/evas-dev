import React from 'react';
import {useNavigate} from 'react-router-dom';

import {CustomButton} from '../../../components/customButton/CustomButton';
import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';

import styles from './card.module.scss';

type CardProps = {
  values: {
    id: number;
    application: string;
    description: string;
    link: string;
    bottle: string;
  }
}

export const Card: React.FunctionComponent<CardProps> = ({values}) => {
  const {application, description, link, bottle} = values;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(link);
  };
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textWrapper}>
          <div className={styles.logo}>
            FRAIJOUR
          </div>
          <div className={styles.application}>
            {application}
          </div>
          <div className={styles.description}>
            {description}
          </div>
        </div>
        <CustomButton
          onClick={handleClick}
          variant={ButtonVariant.WhiteWisteria}
          className={styles.reviewBtn}
        >
          К обзору
        </CustomButton>
      </div>
      <img alt="" src={bottle} className={styles.bottleImg} />

      {/* Mobile */}
      <div className={styles.wrapperMobile}>
        <div className={styles.titleMobile}>
          <div className={styles.leftTitleMobile}>
            <div>
              <div className={styles.logoMobile}>
                FRAIJOUR
              </div>
              <div className={styles.applicationMobile}>
                {application}
              </div>
            </div>
            <CustomButton
              onClick={handleClick}
              variant={ButtonVariant.WhiteWisteria}
              className={styles.reviewBtnMobile}
            >
              К обзору
            </CustomButton>
          </div>
          <img alt="" src={bottle} className={styles.bottleImgMobile} />
        </div>
        <div className={styles.descriptionMobile}>
          {description}
        </div>
      </div>
    </div>
  );
};
