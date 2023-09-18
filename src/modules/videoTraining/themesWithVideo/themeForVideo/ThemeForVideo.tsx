import React from 'react';
import cn from 'classnames';

import {ReactComponent as Play} from '../../../../assets/icons/play.svg';

import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {IVideoTrainingTheme} from '../../../../redux/interfaces';

import {CustomButton} from '../../../../components/customButton/CustomButton';

import {ButtonVariant} from '../../../../utils/constants/buttonVariantEnum';

import {setActiveId} from '../../../../redux/videoTraining/videoTrainingSlice';

import styles from './theme.module.scss';

type ThemeForVideoProps = {
  theme: IVideoTrainingTheme;
}

export const ThemeForVideo: React.FunctionComponent<ThemeForVideoProps> = ({theme}) => {
  const activeId = useAppSelector(state => state.videoTrainingSlice.activeId);
  const dispatch = useAppDispatch();
  const isActive = activeId === theme.id;
  const onClick = () => {
    dispatch(setActiveId(theme.id));
  };
  return (
    <div
      className={styles.container}
      onClick={onClick}
    >
      <div className={styles.textWrapper}>
        {
          isActive &&
          <CustomButton
            onClick={()=>({})}
            variant={ButtonVariant.Primary}
            className={styles.btnPlayer}
          >
            <Play />
          </CustomButton>
        }
        <div className={cn(styles.text, {
          [styles.active]: isActive,
        })}>
          {theme.text}
        </div>
      </div>
      <div className={styles.line} />
    </div>
  );
};

export default React.memo(ThemeForVideo);
