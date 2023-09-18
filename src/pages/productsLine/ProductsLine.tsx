import React, {useRef} from 'react';
import {useParams} from 'react-router-dom';

import {Promo} from '../../modules/promo/Promo';
import {ScrollableBenefits} from '../../modules/scrollableBenefits/ScrollableBenefits';
import BlockWithBrands from '../../modules/blockWithBrands/BlockWithBrands';
import {SomeLines} from '../../modules/someLines/SomeLines';

import core from '../../assets/images/fraijourMain/productLineBackground/core.jpg';
import {ParamTypes} from '../../utils/types/types';

import styles from './productsLine.module.scss';

export const ProductsLine: React.FunctionComponent = () => {
  const params = useParams<ParamTypes>();
  const line = {
    linesName: 'Retine-Collagen <br /> 3D Core',
    image: core,
    mainDescription: `Откройте дверь к совершенному уходу за кожей.
    Наш мягкий отшелушивающий продукт для ежедневного применения успокаивает
    и смягчает, обеспечивая здоровую и сияющую кожу.`,
    firstPill: 'Упругость кожи',
    secondPill: 'Освежение',
    thirdPill: 'Глубокое увлажнение',
    description: `Мы понимаем, что раздраженная и поврежденная кожа требует 
    особого внимания и заботы. Линейка Heartleaf Blemish, с низким уровнем pH, 
    помогает восстановить баланс вашей кожи, укрепляя ее защитный барьер и 
    предотвращая дальнейшую раздраженность.`,
    firstBenefitTitle: 'Очищение',
    firstBenefit: 'Даже самых глубоких пор',
    secondBenefitTitle: '20-30%',
    secondBenefit: 'К упругости кожи',
    thirdBenefitTitle: '50 ph',
    thirdBenefit: 'К упругости кожи',
  };
  const ref = useRef<HTMLDivElement>(null);
  const handleMoveToBenefits = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className={styles.main}>
      <Promo
        title ={line.linesName}
        image={line.image}
        description={line.mainDescription}
        firstPill={line.firstPill}
        secondPill={line.secondPill}
        thirdPill={line.thirdPill}
        clickOnButton={handleMoveToBenefits}/>
      <ScrollableBenefits
        title={line.linesName}
        description={line.description}
        firstBenefitTitle={line.firstBenefitTitle}
        firstBenefit={line.firstBenefit}
        secondBenefitTitle={line.secondBenefitTitle}
        secondBenefit={line.secondBenefit}
        thirdBenefitTitle={line.thirdBenefitTitle}
        thirdBenefit={line.thirdBenefit}/>
      <div className={styles.brand} ref={ref}>
        <BlockWithBrands isHiddenLinesList={true}/>
      </div>
      <div className={styles.lines}>
        <SomeLines />
      </div>
    </div>
  );
};

export default ProductsLine;
