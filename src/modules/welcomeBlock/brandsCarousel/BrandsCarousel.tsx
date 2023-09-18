import React from 'react';
import {Carousel} from '@mantine/carousel';

import {BRANDS} from '../../../utils/constants/brands';

import {ReactComponent as ArrowCarousel} from '../../../assets/icons/arrowCarousel.svg';

import styles from './brandsCarousel.module.scss';


export const BrandsCarousel: React.FunctionComponent = () => {
  const carouselStyles = {
    control: {
      backgroundColor: 'transparent',
      border: 'none',
    },
  };

  const brandsSlides = BRANDS.map((item, i) => (
    <Carousel.Slide key={i} className={styles.slide}>
      <img src={item} alt="" className={styles.brandsImage}/>
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        previousControlIcon={<ArrowCarousel style={{transform: 'rotate(180deg)'}}/>}
        nextControlIcon={<ArrowCarousel/>}
        styles={carouselStyles}
        className={styles.carousel}
        height="100%"
        orientation="vertical"
        loop
        align="center"
        slideSize="120px">
        {brandsSlides}
      </Carousel>
      <Carousel
        previousControlIcon={<ArrowCarousel style={{transform: 'rotate(90deg)'}}/>}
        nextControlIcon={<ArrowCarousel style={{transform: 'rotate(270deg)'}}/>}
        styles={carouselStyles}
        className={styles.carouselMobile}
        height="80px"
        orientation="horizontal"
        loop
        align="start"
        slideSize="187px">
        {brandsSlides}
      </Carousel>
    </>
  );
};

export default BrandsCarousel;
