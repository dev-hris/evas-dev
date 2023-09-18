import {ButtonVariant} from '../constants/buttonVariantEnum';
import {ColorVariant} from '../enums/enum';

export interface IBottle {
  bottleUrl: string;
  popoverValues: IPopover;
  background: IBackground;
  popoverStyle: IPopoverStyle;
  pathLine: string;
  pathProduct: string;
}

export interface IBackground {
  url: string;
  color: string;
}

export interface IPopover {
  buttonColor: ButtonVariant;
  textColor: ColorVariant;
  productLineUrl: string;
}

export interface IPopoverStyle {
  position: 'absolute' | 'relative';
  top?: number | string;
  left?: number | string;
  right?: number | string;
  bottom?: number | string;
}

export interface IProduct {
  title: string;
  description: string;
  path: string;
  onClick: () => void;
}

export type ParamTypes = {
  lineProduct: string;
  product: string;
};

export interface ILine {
  title: string,
  description: string,
  products: IProduct[],
  path: string,
}
