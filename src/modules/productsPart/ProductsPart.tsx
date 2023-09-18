import React, {useState} from 'react';
import {Carousel, Embla} from '@mantine/carousel';
import {Text, Group} from '@mantine/core';

import {usePagination} from '@mantine/hooks';

import Bottle from '../../assets/images/fraijourMain/main/bottle1.png';
import {ReactComponent as PaginationArrow} from '../../assets/icons/paginationArrow.svg';

import CarouselCard from './CarouselCard/CarouselCard';

import styles from './productsPart.module.scss';

interface ITag {
    color: string;
    text: string;
}

export interface ICarouselCard {
    image: string;
    tags: ITag[];
    volume: string;
    title: string;
    infoTitle: string;
    infoText: string;
}

const cardList: ICarouselCard[] = [
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 1',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 2',
    volume: '250мл.',
    tags: [],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 3',
    volume: '250мл.',
    tags: [
      {
        text: 'fraijour',
        color: '#668354',
      }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 4',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 5',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 6',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 7',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 8',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
  {
    image: Bottle,
    infoText: 'Маска для лица тканевая высокоэффективная ' +
          'EVAS 10шт / набор масокувлажняющие, тонизирующие с большим содержанием сыворотки',
    infoTitle: 'Evas Fraijour для лица',
    title: 'Evas Fraijor крем 9',
    volume: '250мл.',
    tags: [{
      text: 'new',
      color: '#466E93',
    },
    {
      text: 'fraijour',
      color: '#668354',
    }],
  },
];

type Props = {
  subtitle: string;
  title: string;
};

const ProductsPart: React.FunctionComponent<Props> = ({
  subtitle,
  title,
}) => {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const pagination = usePagination(
    {
      total: cardList.length,
      // Поменять под нужное число
      siblings: 20,
      initialPage: 1,
      onChange: (value) => embla?.scrollTo(value - 1),
    });

  const paginationBlock = <Group className={styles.pagination} spacing={7}>
    <PaginationArrow className={styles.paginationArrow}
      onClick={() => {
        pagination.active === 1 ? pagination.last(): pagination.previous();}}
    />
    {
      pagination.range.map(
        // Вставить нужный блок,
        // который будет отображать dots(скрытые элементы) с помощью item === 'dots
        (item, index) =>
          <div key={index} className={item === pagination.active ?
            styles.paginationDotsActive : styles.paginationDots}
          />)
    }
    <PaginationArrow className={styles.paginationArrowRight}
      onClick={() => {
        pagination.active === cardList.length ? pagination.first(): pagination.next();}}
    />
  </Group>;

  return <div className={styles.productsPart}>
    <div className={styles.wrapper}>
      <Text className={styles.subtitle}>{subtitle}</Text>
      <div className={styles.header}>
        <Text className={styles.title}>{title}</Text>
        <div className={styles.paginationTablet}>
          {paginationBlock}
        </div>
      </div>
    </div>
    <Carousel
      getEmblaApi={setEmbla}
      withControls={false}
      draggable={false}
      initialSlide={0}
      align={'start'}
      loop
    >
      {/* TODO: Добавил key, но плохо использовать index, нужно будет переписать (не только тут) */}
      {cardList.map((item, index) => <CarouselCard key={index} {...item}/>)}
    </Carousel>
    <div className={styles.paginationMobile}>
      {paginationBlock}
    </div>
  </div>;
};

export default ProductsPart;
