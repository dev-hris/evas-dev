import React from 'react';
import cn from 'classnames';

import {ReactComponent as TickDown} from '../../../assets/icons/tickDown.svg';
import {ReactComponent as TickUp} from '../../../assets/icons/tickUp.svg';

import {allProductsLines} from '../../../utils/constants/linesWithBrands';

import styles from './linesDescription.module.scss';

type Props = {
  title: string;
  description: string;
  isOpenDescription: boolean;
  changeDescription: () => void;
}

export const LinesDescription: React.FunctionComponent<Props> = ({
  title,
  description,
  isOpenDescription,
  changeDescription,
}) => {
  const getStyle = () => {
    switch (title) {
    case allProductsLines.BiomeLacto:
      return {className: styles.openButtonNewYorkPink,
        classNameActive: styles.openButtonActiveNewYorkPink};
    case allProductsLines.HeartleafBlemish:
      return {className: styles.openButtonGreenSmoke,
        classNameActive: styles.openButtonActiveGreenSmoke};
    case allProductsLines.OriginalHerbWormwood:
      return {className: styles.openButtonAquaForest,
        classNameActive: styles.openButtonActiveAquaForest};
    case allProductsLines.ProMoisture:
      return {className: styles.openButtonIndigo,
        classNameActive: styles.openButtonActiveIndigo};
    case allProductsLines.YuzuHoney:
      return {className: styles.openButtonRonchi,
        classNameActive: styles.openButtonActiveRonchi};
    default:
      return {className: styles.openButtonPortage,
        classNameActive: styles.openButtonActivePortage};
    }
  };

  const buttonsStyle = getStyle();

  return (<>
    <div className={styles.description}>
      {description}
    </div>
    <div className={styles.descriptionTablet}>
      <div className={cn(isOpenDescription && styles.titleTabletActive, styles.titleTablet)}>
        <div>Описание линейки _</div>
        <button
          onClick={changeDescription}
          className={cn(styles.openButton,
            buttonsStyle.className, isOpenDescription && buttonsStyle.classNameActive)}>
          {isOpenDescription? <TickUp/>: <TickDown/>}
        </button>
      </div>
      <div className={isOpenDescription ? styles.textTablet : styles.hide}>
        {description}
      </div>
    </div>
  </>);
};

export default LinesDescription;
