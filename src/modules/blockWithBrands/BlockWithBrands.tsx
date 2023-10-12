import React, {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {allProductsLines, PRODUCTS_LINES} from '../../utils/constants/linesWithBrands';
import {IProduct, ParamTypes} from '../../utils/types/types';

import {CustomButton} from '../../components/customButton/CustomButton';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import LinesList from './linesList/LinesList';
import LinesDescription from './linesDescription/LinesDescription';
import ProductsList from './productsList/ProductsList';

import RetineCollagenLine from './lines/retineCollagenLine/RetineCollagenLine';
import YuzuHoneyLine from './lines/yuzuHoneyLine/YuzuHoneyLine';
import BiomeLactoLine from './lines/biomeLactoLine/BiomeLactoLine';
import ProMoistureLine from './lines/proMoistureLine/ProMoistureLine';
import OriginalHerbWormwoodLine from './lines/originalHerbWormwoodLine/OriginalHerbWormwood';
import HeartleafBlemishLine from './lines/heartleafBlemishLine/HeartleafBlemishLine';

import styles from './blockWithBrands.module.scss';


type BlockWithBrandsProps = {
  isHiddenLinesList?: boolean;
}

const linksLinesProduct = [
  'retinCollagen3dCore',
  'heartLeaf',
  'proMoisture',
  'biome5lacto',
  'yuzuHoney',
  'originalHerbWormwood',
];

export const BlockWithBrands: React.FunctionComponent<BlockWithBrandsProps> = ({
  isHiddenLinesList = false,
}) => {

  const {lineProduct} = useParams<ParamTypes>();
  const clickOnLine = (index: number)=> {
    setActiveLine(_ => {
      setProductsList(productLines[index].products);
      setActiveProduct(-1);
      return index;});
  };

  const productLines = PRODUCTS_LINES.map((line, linesIndex) => {
    return {title: line.title,
      desciprtion: line.desciprtion,
      path: line.path,
      products: line.products.map((product, productsIndex) => {
        return {...product, onClick: ()=>{setActiveProduct(productsIndex);}};}),
      onClick: ()=> {clickOnLine(linesIndex);}};
  });

  const [activeLine, setActiveLine] = useState<number>(() => {
    const activeLine = linksLinesProduct.findIndex(v => v === lineProduct);
    if(activeLine !== -1) {
      return activeLine;
    }
    return 0;
  });
  const [productsList, setProductsList] = useState<IProduct[]>(() => {
    const activeLine = linksLinesProduct.findIndex(v => v === lineProduct);
    if(activeLine !== -1) {
      return productLines[activeLine].products;
    }
    return productLines[0].products;
  });
  const [activeProduct, setActiveProduct] = useState<number>(-1);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const navigate = useNavigate();

  const handleClickWatchLineProduct = () => {
    navigate(`${productLines[activeLine].path}`);
  };

  function changeDescription(){
    setIsOpenDescription(_ => {
      setIsOpenProducts(false);
      return !isOpenDescription;
    });
  }

  function changeProducts(){
    setIsOpenProducts(_ => {
      setIsOpenDescription(false);
      return !isOpenProducts;
    });
  }

  function selectProductsBlock(){
    switch (productLines[activeLine].title) {
    case allProductsLines.RetineCollagen3DCore:
      return <RetineCollagenLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.HeartleafBlemish:
      return <HeartleafBlemishLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.ProMoisture:
      return <ProMoistureLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.BiomeLacto:
      return <BiomeLactoLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.YuzuHoney:
      return <YuzuHoneyLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.OriginalHerbWormwood:
      return <OriginalHerbWormwoodLine
        activeProduct={activeProduct}
        products={productsList}/>;
    }
  }
  return (<>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        {!isHiddenLinesList && <LinesList lines={productLines} activeLine={activeLine}/>}
        <div className={styles.productsBlock}>
          <div className={styles.title}>
          Описание линейки _
          </div>
          <LinesDescription
            title={productLines[activeLine].title}
            description={productLines[activeLine].desciprtion}
            isOpenDescription={isOpenDescription}
            changeDescription={changeDescription}/>
          <ProductsList
            title={productLines[activeLine].title}
            products={productsList}
            activeProduct={activeProduct}
            changeProducts={changeProducts}
            isOpen={isOpenProducts}/>
        </div>
      </div>
      <div className={styles.allProducts}>
        {selectProductsBlock()}
        <CustomButton
          variant={ButtonVariant.Black}
          onClick={handleClickWatchLineProduct}
          className={styles.buttonOpenLine}>
          {'Смотреть линейку'}
        </CustomButton>
      </div>
    </div>
    <div className={styles.containerMobile}>
      {!isHiddenLinesList && <LinesList lines={productLines} activeLine={activeLine}/>}
      <div className={styles.allProducts}>
        {selectProductsBlock()}
        <CustomButton
          variant={ButtonVariant.Black}
          onClick={handleClickWatchLineProduct}
          className={styles.buttonOpenLine}>
          {'Смотреть линейку'}
        </CustomButton>
      </div>
      <ProductsList
        title={productLines[activeLine].title}
        products={productsList}
        activeProduct={activeProduct}
        changeProducts={changeProducts}
        isOpen={isOpenProducts}/>
    </div>
  </>);
};

export default BlockWithBrands;
