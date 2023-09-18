import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {useAppSelector} from '../../redux/hooks';

import product1 from '../../assets/images/fraijourMain/productsBottles/product1.png';
import {ReactComponent  as ArrowToLeft} from '../../assets/icons/arrowToLeft.svg';
import {ReactComponent  as ArrowToRight} from '../../assets/icons/arrowToRight.svg';

import {CustomButton} from '../../components/customButton/CustomButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {PATH} from '../../utils/constants/routeConstants';

import {Drawer} from '../../components/drawer/Drawer';

import {InfoProductDrawer} from './infoProductDrawer/InfoProductDrawer';

import styles from './cardProduct.module.scss';

export const CardProduct = () => {
  const navigate = useNavigate();
  const product = useAppSelector(state => state.contentSlice.product);
  const activeProduct = useAppSelector(state => state.contentSlice.activeProduct);
  const activeLine = useAppSelector(state => state.contentSlice.activeLine);
  const allProducts = useAppSelector(state => state.contentSlice.allProducts);
  const index = allProducts.findIndex(product => product === activeProduct);
  const [isPrevProduct, setIsPrevProduct] = useState(false);
  const [isNextProduct, setIsNextProduct] = useState(false);

  useEffect( () => {
    setIsPrevProduct(_ => {
      if (index !== 0) {
        return true;
      }
      return false;
    });
    setIsNextProduct(_ => {
      if (index !== allProducts.length - 1) {
        return true;
      }
      return false;
    });
  }, [index]);

  const productTest = {
    lineName: 'Retin-Collagen 3D Core',
    productName: 'Ampoule Mist',
    content: `Абсолютный уход за кожей: сила синергии 7 
    коллагенов заполняет кожу и повышает
    выработку коллагена`,
    image: product1,
    valume: '200 мл',
    application: `Нанесите необходимое количество крема утром и
     вечером, и аккуратно медленно распределите по всему лицу.`,
    description: 'desc', // надо написать функцию, которая будет
  }; //чекать в тексте br и делать их реальными элементиками

  const [isActiveDescription, setIsActiveDescription] = useState(false);
  const [isActiveApplication, setIsActiveApplication] = useState(false);
  const handleApplicationDrawer = (flag: boolean) => {
    setIsActiveApplication(flag);
  };

  const handleDescriptionDrawer = (flag: boolean) => {
    setIsActiveDescription(flag);
  };

  const handleCloseDrawer = () => {
    setIsActiveDescription(_ => {
      setIsActiveApplication(false);
      return false;
    });
  };

  const handleClickDrawer = () => {
    if(!isActiveApplication || !isActiveDescription) {
      setIsActiveDescription(_ => {
        setIsActiveApplication(true);
        return true;
      });
    }
    else {
      setIsActiveDescription(_ => {
        setIsActiveApplication(false);
        return false;
      });
    }
  };

  const handleEndDrawer = (flag: boolean) => {
    if(flag) {
      setIsActiveApplication(_ => {
        setIsActiveDescription(false);
        return false;
      });
      return;
    }
    setIsActiveApplication(_ => {
      setIsActiveDescription(true);
      return true;
    });
  };

  const infoProductValue = {
    description: {isActiveDescription, handleDescriptionDrawer},
    application: {isActiveApplication, handleApplicationDrawer},
  };

  const redirectToBrand = () => {
    navigate(`${PATH.fraijour}`);
  };

  const redirectToPrevProduct = () => {
    const prevProduct = allProducts[index - 1];
    navigate(`/${activeLine}/${prevProduct}`);
  };

  const redirectToNextProduct = () => {
    const nextProduct = allProducts[index + 1];
    navigate(`/${activeLine}/${nextProduct}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        <div className={styles.heading}>
          <CustomButton
            variant={ButtonVariant.Transparent}
            className={styles.backButton}
            onClick={redirectToBrand}>
            <>
              <ArrowToLeft className={styles.icon}/>
              <span className={styles.text}>назад</span>
            </>
          </CustomButton>
          <div className={styles.title}>
            <div className={styles.line}>
              {productTest.lineName}
            </div>
            <div className={styles.product}>
              {productTest.productName}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {productTest.content}
        </div>
        <span className={styles.itemsTitle}>Объем</span>
        <div className={styles.valumeValue}>{productTest.valume}</div>
        <div className={styles.research}>
          <span className={styles.itemsTitle}>Доказано испытаниями:</span>
          <CustomButton
            variant={ButtonVariant.Primary}
            className={styles.buttonResearch}
            onClick={()=>{}}>
            <>
              <span>Смотреть результаты испытаний</span>
              <div className={styles.circle}>
                <ArrowToRight className={styles.icon}/>
              </div>
            </>
          </CustomButton>
        </div>
        <div className={styles.titleApplication}>Применение:</div>
        <div className={styles.application}>{productTest.application}</div>
      </div>
      <img src={productTest.image} alt="" className={styles.productImage} />
      <div className={styles.description}>
        <div className={styles.descriptionTitle}>Описание:</div>
        <div className={styles.descriptionText}>
          {`Сделайте кожу более эластичной, используя
            липосомы! Благодаря новому липосомному типу
            ретинола, он воздействует на кожу эффективнее
            и стабильнее, чем ретинол.`}
          <br/><br/>
          {`Наполнение, подтягивание и поддержание
            эластичности кожи благодаря 3 видам
            коллагена Коллаген Attelo, водорастворимый
            коллаген, жирорастворимый коллаген.`}
          <br/><br/>
          {`7 комплексов коллагена, которые впитываются
            непосредственно в кожу
            Микромаломолекулярный коллаген 4-го
            поколения размером с 170 000 волоса глубоко
            впитывается в кожу и удерживает разрушенное
            ядро кожи
            9 видов пептидов.`}
        </div>
      </div>
      <Drawer
        activeBlocks={[isActiveApplication, isActiveDescription]}
        end={handleEndDrawer}
        handleClick={handleClickDrawer}
        className={styles.drawer}
      >
        <InfoProductDrawer values={infoProductValue} handleClose={handleCloseDrawer} />
      </Drawer>
      <div className={cn(styles.navigation, {
        [styles.active]: isActiveDescription || isActiveApplication,
      })}>
        <CustomButton
          variant={ButtonVariant.White}
          onClick={redirectToPrevProduct}
          className={styles.navigationBtnLeft}
          disabled={!isPrevProduct}>
          <>
            <div className={styles.circleLeft}>
              <ArrowToLeft className={styles.icon}/>
            </div>
            <span className={styles.text}>Предыдущий продукт</span>
          </>
        </CustomButton>
        <CustomButton
          variant={ButtonVariant.White}
          onClick={redirectToNextProduct}
          className={styles.navigationBtnRight}
          disabled={!isNextProduct}>
          <>
            <span className={styles.text}>Следующий продукт</span>
            <div className={styles.circleRight}>
              <ArrowToRight className={styles.icon}/>
            </div>
          </>
        </CustomButton>
      </div>
    </div>
  );
};
