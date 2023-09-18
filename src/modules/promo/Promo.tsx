import React, {useState} from 'react';
import cn from 'classnames';

import {useInView} from 'react-intersection-observer';
import {useNavigate} from 'react-router-dom';
import {Parallax} from 'react-scroll-parallax';

import {RoundButton} from '../../components/roundButton/RoundButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {CustomLabel} from '../../components/customLabel/CustomLabel';
import {ReactComponent as ArrowToLeft} from '../../assets/icons/arrowToLeft.svg';
import {ReactComponent as ArrowToDown} from '../../assets/icons/arrowToDown.svg';

import {CustomButton} from '../../components/customButton/CustomButton';

import {PATH} from '../../utils/constants/routeConstants';

import styles from './promo.module.scss';

type Props = {
    title: string;
    image: any;
    description: string;
    firstPill: string;
    secondPill: string;
    thirdPill: string;
    clickOnButton: () => void
}

export const Promo: React.FunctionComponent<Props> = ({
  title,
  image,
  description,
  firstPill,
  secondPill,
  thirdPill,
  clickOnButton,
}) => {
  const navigate = useNavigate();

  const [pills] = useState([
    {
      className: styles.pill1, title: firstPill,
      animation: {
        translateY: [3000, 300] as any,
        translateX: [600, 200] as any,
        rotate: [100, -50] as any,
      },
    },
    {
      className: styles.pill2, title: secondPill,
      animation: {
        translateY: [-200, -3000],
        translateX: [-400, 300],
        rotate: [0, 150],
      },
    },
    {
      className: styles.pill3, title: thirdPill,
      animation: {
        translateY: [4000, 500] as any,
        translateX: [400, 100] as any,
        rotate: [50, -50] as any,
      },
    },
  ]);
  const {ref, inView} = useInView({
    threshold: 1,
  });

  const redirectToBrand = () => {
    navigate(`${PATH.fraijour}`);
  };

  return (<div
    className={cn(styles.container, {[styles.containerScrolled]: inView})}
    style={{backgroundImage: `url('${image}')`}}
  >
    <div className={styles.background} style={{backgroundImage: `url('${image}')`}}/>
    <div className={styles.content}>
      <div>
        <CustomButton
          className={styles.buttonBack}
          variant={ButtonVariant.White}
          onClick={redirectToBrand}>
          <>
            <ArrowToLeft className={styles.iconBack} />
            <span>назад</span>
          </>
        </CustomButton>
        <h2 className={styles.subtitle}>Уходовая линейка</h2>
        <div className={styles.titleBlock}>
          <h1 className={styles.title}>Retine-Collagen <br /> 3D Core</h1>
        </div>
      </div>
      <div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.buttonDownBlock}>
        <RoundButton
          className={styles.buttonDown}
          variant={ButtonVariant.Primary}
          onClick={clickOnButton}>
          <ArrowToDown className={styles.iconDown} />
        </RoundButton>
      </div>
    </div>
    <div className={styles.pills}>
      {pills.map(({className, title, animation}) => (
        <Parallax
          key={title}
          translateX={animation.translateX}
          translateY={animation.translateY}
          rotateZ={animation.rotate}
          className={className}
        >
          <CustomLabel title={title} />
        </Parallax>
      ))}
    </div>
    <div className={styles.blockCheckScroll} ref={ref} />
  </div>);
};
