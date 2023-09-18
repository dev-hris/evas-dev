import React from 'react';

import {Parallax, useParallax} from 'react-scroll-parallax';

import circle1 from '../../assets/images/fraijourMain/compositionOfProducts/circle1.png';
import circle2 from '../../assets/images/fraijourMain/compositionOfProducts/circle2.png';
import circle3 from '../../assets/images/fraijourMain/compositionOfProducts/circle3.png';
import circle4 from '../../assets/images/fraijourMain/compositionOfProducts/circle4.png';
import circle5 from '../../assets/images/fraijourMain/compositionOfProducts/circle5.png';

import {ReactComponent as LogoMain} from '../../assets/icons/logoMain.svg';

import {CustomLabel} from '../../components/customLabel/CustomLabel';

import {useImagePreloader} from '../../utils/helpers/useImagePreloader';

import {Preloader} from '../../components/preloader/Preloader';

import styles from './compositionOfProducts.module.scss';

const circles = [
  {className: styles.circle1, url: circle1},
  {className: styles.circle2, url: circle2},
  {className: styles.circle3, url: circle3},
  {className: styles.circle4, url: circle4},
  {className: styles.circle5, url: circle5},
];

const imgsPreload = circles.map((circle) => circle.url);

const labels = [
  {className: styles.label1, title: 'сохранение молодости кожи'},
  {className: styles.label2, title: 'коллаген'},
  {className: styles.label3, title: 'освежение'},
  {className: styles.label4, title: 'очищение даже самых глубоких пор'},
  {className: styles.label5, title: '+20% к упругости кожи'},
  {className: styles.label6, title: 'увлажнение'},
  {className: styles.label7, title: 'коллаген'},
  {className: styles.label8, title: 'сохранение молодости кожи'},
  {className: styles.label9, title: 'ретинол'},
  {className: styles.label10, title: 'увлажнение'},
  {className: styles.label11, title: 'ретинол'},
];

export const CompositionOfProducts = () => {
  const {isPreloaded} = useImagePreloader(imgsPreload, 500);
  return (
    <div className={styles.container}>
      <div className={styles.productContainer}>
        <div className={styles.logo}>
          <LogoMain />
        </div>
        {circles.map(({className, url}) => (
          <Parallax key={url} className={className} translateY={[-20, 20]}>
            {
              isPreloaded
                ? <img alt="" src={url} className={styles.circle}/>
                : <Preloader className={styles.preloader} />
            }
          </Parallax>
        ))}
        {labels.map(({className, title}, index) => (
          <Parallax key={index} className={className} translateY={[20, -20]}>
            <CustomLabel title={title} />
          </Parallax>
        ))}
      </div>
    </div>
  );
};
