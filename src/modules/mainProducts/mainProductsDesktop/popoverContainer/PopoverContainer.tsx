import React from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {ColorVariant} from '../../../../utils/enums/enum';

import {CustomButton} from '../../../../components/customButton/CustomButton';
import {RoundButton} from '../../../../components/roundButton/RoundButton';

import {ReactComponent as ArrowProduct} from '../../../../assets/icons/arrow.svg';
import {ReactComponent as ArrowLine} from '../../../../assets/icons/tickDown.svg';

import {IPopover} from '../../../../utils/types/types';
import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';
import {useImagePreloader} from '../../../../utils/helpers/useImagePreloader';

import styles from './popoverContainer.module.scss';

type Props = {
  popover: IPopover;
  pathProduct: string;
  pathLine: string;
};

export const PopoverContainer: React.FunctionComponent<Props> = ({
  popover,
  pathProduct,
  pathLine,
}) => {
  const {
    productLineUrl,
    textColor,
    buttonColor,
  } = popover;
  const navigate = useNavigate();
  const {isPreloaded} = useImagePreloader([productLineUrl]);
  const redirectToProduct = () => {
    navigate(pathProduct);
  };

  const redirectToLine = () => {
    navigate(pathLine);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {isPreloaded && <img src={productLineUrl} alt="" className={styles.imgWrapper} />}
        <div className={styles.title}>
          <div>
            <div className={styles.lineText}>линейка</div>
            <div className={styles.titleNameText}>Collagen 3D Core</div>
          </div>
          <RoundButton
            className={styles.btnToLine}
            variant={ButtonVariant.BlurEmpty}
            onClick={redirectToLine}>
            <ArrowLine className={styles.iconToLine}/>
          </RoundButton>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div
          className={cn(styles.productText, {
            [styles.textNewYorkPink]: textColor === ColorVariant.NewYorkPink,
            [styles.textIndigo]: textColor === ColorVariant.Indigo,
            [styles.textAquaForest]: textColor === ColorVariant.AquaForest,
            [styles.textGreenSmoke]: textColor === ColorVariant.GreenSmoke,
            [styles.textPortage]: textColor === ColorVariant.Portage,
            [styles.textRonchi]: textColor === ColorVariant.Ronchi,
          })}
        >
          продукт
        </div>
        <div className={styles.productNameText}>Eye Core Cleansing Foam</div>
        <div className={styles.productInfoText}>
          Нежный очищающий гель для умывания на основе аминокислот. Мягко
          очищает кожу, не оставляя чувство стянутости.
        </div>
        <CustomButton
          className={styles.btn}
          variant={buttonColor}
          onClick={redirectToProduct}
        >
          <>
            {'Подробнее'}
            <ArrowProduct className={styles.iconArrow} />
          </>
        </CustomButton>
      </div>
    </div>
  );
};
