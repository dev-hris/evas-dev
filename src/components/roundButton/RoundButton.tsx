import React, {ReactElement} from 'react';
import cn from 'classnames';

import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';

import styles from './roundButton.module.scss';

type Props = {
  children?: ReactElement | string;
  className?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: ButtonVariant;
  disabled?: boolean;
};

const variantsStyle: Partial<Record<ButtonVariant, string>> = {
  [ButtonVariant.Primary]: styles.evasBtnPrimary,
  [ButtonVariant.OutLine]: styles.evasBtnOutLine,
  [ButtonVariant.Light]: styles.evasBtnLight,
  [ButtonVariant.BlurEmpty]: styles.evasBtnBlurEmpty,
  [ButtonVariant.WhiteDolphin]: styles.evasBtnWhiteDolphin,
  [ButtonVariant.Portage]: styles.evasBtnPortageTotal,
  [ButtonVariant.AquaForest]: styles.evasBtnAquaForest,
  [ButtonVariant.GreenSmoke]: styles.evasBtnGreenSmoke,
  [ButtonVariant.Indigo]: styles.evasBtnIndigo,
  [ButtonVariant.NewYorkPink]: styles.evasBtnNewYorkPink,
  [ButtonVariant.Ronchi]: styles.evasBtnRonchi,
  [ButtonVariant.PortageTotal]: styles.evasBtnPortageTotal,
  [ButtonVariant.AquaForestTotal]: styles.evasBtnAquaForestTotal,
  [ButtonVariant.GreenSmokeTotal]: styles.evasBtnGreenSmokeTotal,
  [ButtonVariant.IndigoTotal]: styles.evasBtnIndigoTotal,
  [ButtonVariant.NewYorkPinkTotal]: styles.evasBtnNewYorkPinkTotal,
  [ButtonVariant.RonchiTotal]: styles.evasBtnRonchiTotal,
  [ButtonVariant.WhiteLilac]: styles.evasBtnWhiteLilac,
  [ButtonVariant.BlueGem]: styles.evasBtnBlueGem,
};

export const RoundButton: React.FunctionComponent<Props> = ({
  children,
  className,
  variant,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={cn(className, styles.container, variantsStyle[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
