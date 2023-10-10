import React, {useState, useEffect} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {useAppSelector} from '../../redux/hooks';

import {ReactComponent  as ArrowToLeft} from '../../assets/icons/arrowToLeft.svg';
import {ReactComponent  as ArrowToRight} from '../../assets/icons/arrowToRight.svg';

import {CustomButton} from '../../components/customButton/CustomButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {PATH} from '../../utils/constants/routeConstants';
import {splitStringByBr} from '../../utils/helpers/splitString';

import {Drawer} from '../../components/drawer/Drawer';

import {InfoProductDrawer} from './infoProductDrawer/InfoProductDrawer';

import styles from './cardProduct.module.scss';

export const CardProduct = () => {
  const navigate = useNavigate();
  const product = useAppSelector(state => state.contentSlice.product);
  const isLoading = useAppSelector(state => state.contentSlice.isLoading);
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
    description: {isActiveDescription, handleDescriptionDrawer, product},
    application: {isActiveApplication, handleApplicationDrawer, product},
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
      {(product && !isLoading) && <>
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
                {product.lineName}
              </div>
              <div className={styles.product}>
                {product.productName}
              </div>
            </div>
          </div>
          <div className={styles.content}>
            {product.content}
          </div>
          <span className={styles.itemsTitle}>Объем</span>
          <div className={styles.valumeValue}>{product.volume}</div>
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
          <div className={styles.application}>{product.application}</div>
        </div>
        <img src={product.image} alt="" className={styles.productImage} />
        <div className={styles.description}>
          <div className={styles.descriptionTitle}>Описание:</div>
          <div className={styles.descriptionText}>
            {splitStringByBr(product.description).map((part, id) =>
              <div key={id}>
                {part}
                <br/>
              </div>)}
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
      </>}
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
