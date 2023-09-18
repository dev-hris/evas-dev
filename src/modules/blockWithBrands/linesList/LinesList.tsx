import React from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {CustomButton} from '../../../components/customButton/CustomButton';
import {RoundButton} from '../../../components/roundButton/RoundButton';

import {ReactComponent as ArrowToLeft} from '../../../assets/icons/arrowToLeft.svg';
import {ReactComponent as ArrowToRight} from '../../../assets/icons/arrowToRight.svg';

import {ButtonVariant} from '../../../utils/constants/buttonVariantEnum';
import {allProductsLines} from '../../../utils/constants/linesWithBrands';

import styles from './linesList.module.scss';

type LinesListProps = {
  lines: {
    title: string,
    path: string;
    onClick: ()=>void}[];
  activeLine: number;
}

export const LinesList: React.FunctionComponent<LinesListProps> = ({lines, activeLine}) => {
  const navigate = useNavigate();

  function openPrevious() {
    if (activeLine > 0) {
      lines[activeLine - 1].onClick();
    }
  }

  function openNext() {
    if (activeLine < lines.length - 1) {
      lines[activeLine + 1].onClick();
    }
  }

  const openLine = (path: string) => {
    navigate(path);
  };

  const getStyle = (title: string) => {
    switch (title) {
    case allProductsLines.BiomeLacto:
      return {className: styles.lineNewYorkPink, classNameActive: styles.lineActiveNewYorkPink};
    case allProductsLines.HeartleafBlemish:
      return {className: styles.lineGreenSmoke, classNameActive: styles.lineActiveGreenSmoke};
    case allProductsLines.OriginalHerbWormwood:
      return {className: styles.lineAquaForest, classNameActive: styles.lineActiveAquaForest};
    case allProductsLines.ProMoisture:
      return {className: styles.lineIndigo, classNameActive: styles.lineActiveIndigo};
    case allProductsLines.YuzuHoney:
      return {className: styles.lineRonchi, classNameActive: styles.lineActiveRonchi};
    default:
      return {className: styles.linePortage, classNameActive: styles.lineActivePortage};
    }
  };

  return (<>
    <div className={styles.linesList}>
      <div className={styles.title}>Линейка _</div>
      <div className={styles.lines}>
        {lines.map((line, index) => {
          const linesStyle = getStyle(line.title);
          return <div key={line.title} className={styles.lineBlock}>
            <CustomButton
              className={cn(styles.line,
                linesStyle.className, activeLine === index && linesStyle.classNameActive)}
              variant={ButtonVariant.Transparent}
              onClick={line.onClick}>
              {line.title}
            </CustomButton>
            {activeLine === index && <CustomButton
              variant={ButtonVariant.Black}
              onClick={()=>{openLine(line.path);}}
              className={styles.buttonShow}>
              {'Смотреть линейку'}
            </CustomButton>}
          </div>;
        })}
      </div>
    </div>
    <div className={styles.linesListMobile}>
      <RoundButton
        onClick={openPrevious}
        variant={ButtonVariant.Light}
        className={styles.buttonNavigate}
        disabled={activeLine === 0}>
        <ArrowToLeft className={styles.btnIcon}/>
      </RoundButton>
      <div className={styles.headerMobile}>
        <div className={styles.titleMobile}>Линейка _</div>
        <div className={cn(styles.textMobile,
          getStyle(lines[activeLine].title).classNameActive)}>{lines[activeLine].title}</div>
      </div>
      <RoundButton
        onClick={openNext}
        variant={ButtonVariant.Light}
        className={styles.buttonNavigate}
        disabled={activeLine === lines.length - 1}>
        <ArrowToRight className={styles.btnIcon}/>
      </RoundButton>
    </div>
  </>);
};

export default React.memo(LinesList);
