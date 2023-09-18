import React from 'react';

import {Link} from 'react-router-dom';

import {ReactComponent as ArrowToRight} from '../../assets/icons/arrowToRight.svg';
import bottle1 from '../../assets/images/fraijourMain/main/bottle1.png';
import bottle2 from '../../assets/images/fraijourMain/main/bottle2.png';
import bottle3 from '../../assets/images/fraijourMain/main/bottle3.png';

import {Card} from './Card/Card';

import styles from './reviews.module.scss';

const arrayShampoo = [
  {
    id: 0,
    application: 'Шампунь для волос',
    description:
      'Слабокислотная пенка для кожи' +
      'с акне Fraijour 250 мл. Состав шампуня настолько' +
      'натуральный что срок его хранения очень маленький.',
    link: '',
    bottle: bottle1,
  },
  {
    id: 1,
    application: 'Крем для лица с особым уходом от старения',
    description: 'Слабокислотная пенка для кожи с акне' +
    'Fraijour 250 мл. Состав шампуня настолько натуральный что срок.',
    link: '',
    bottle: bottle2,
  },
  {
    id: 2,
    application: 'Шампунь для волос',
    description:
      'Слабокислотная пенка для кожи' +
      'с акне Fraijour 250 мл. Состав шампуня настолько' +
      'натуральный что срок его хранения очень маленький.',
    link: '',
    bottle: bottle3,
  },
];

export const ReviewsHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.line} />
      <div className={styles.title}>
        <div className={styles.textInteresting}>Актуально</div>
        <div className={styles.titleWrapper}>
          <div className={styles.textTitle}>Обзоры</div>
          <Link to={''} className={styles.linkTitle}>
            <div>Все обзоры</div>
            <div className={styles.arrow}>
              <ArrowToRight />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.shampooWrapper}>
        {arrayShampoo.map(shampoo => <Card
          values={shampoo}
          key={shampoo.id}
        />)}
      </div>
      <Link to={''} className={styles.linkMobile}>
        <div>Все обзоры</div>
        <div className={styles.arrow}>
          <ArrowToRight />
        </div>
      </Link>
    </div>
  );
};
