import React, {useState} from 'react';
import cn from 'classnames';

import {Box, Text, Button} from '@mantine/core';


import styles from './carouselCard.module.scss';

interface Tag {
    color: string;
    text: string;
}

export interface CarouselCardProps {
    image: string;
    tags: Tag[];
    volume: string;
    title: string;
    infoTitle: string;
    infoText: string;
}
const CarouselCard = (
  {image, title, tags, volume, infoTitle, infoText}: CarouselCardProps) => {
  const [visibleInfo, setVisibleInfo] = useState(false);
  return <Box
    className={styles.carouselCard}
    onMouseEnter={() => {setVisibleInfo(true);}}
    onMouseLeave={() => setVisibleInfo(false)}>
    <div className={styles.ImageBlock}>
      <img src={image} className={cn(styles.image, {[styles.hoverImage] : visibleInfo})} alt=""/>
    </div>
    <div className={styles.textLayer}>
      <div className={styles.badgesBlock}>
        {tags.map((item, index) =>
          <div
            key={index}
            className={styles.badge}
            style={
              {backgroundColor: item.color}
            }>
            {item.text}
          </div>)}
      </div>
      <div className={styles.heading}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.volume}>{volume}</Text>
      </div>
    </div>
    {visibleInfo && <div className={styles.hint}>
      <Text className={styles.infoTitle}>{infoTitle}</Text>
      <Text className={styles.infoText}>{infoText}</Text>
      <Button className={styles.moreButton}>Подробнее</Button>
    </div>}
  </Box>;
};

export default CarouselCard;
