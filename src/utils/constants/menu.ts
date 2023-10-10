import {PATH} from './routeConstants';

export enum FraijourMenu {
  Portage,
  AquaForest,
  GreenSmoke,
  Indigo,
  NewYorkPink,
  Ronchi,
}

export const fraijourMenu = [
  {
    title: 'HEARTLEAF',
    variant: FraijourMenu.GreenSmoke,
    link: PATH.lines.heartLeaf,
  },
  {
    title: 'ORIGINAL ARTEMISIA',
    variant: FraijourMenu.Portage,
    link: PATH.lines.originalArtemisia,
  },
  {
    title: 'ORIGINAL HERB WORMWOOD',
    variant: FraijourMenu.AquaForest,
    link: PATH.lines.originalHerbWormwood,
  },
  {
    title: 'YUZU HONEY',
    variant: FraijourMenu.Ronchi,

    link: PATH.lines.yuzuHoney,
  },
  {
    title: 'RETIN-COLLAGEN 3D CORE',
    link: PATH.lines.retinCollagen3dCore,
    variant: FraijourMenu.Portage,
  },
  {
    title: 'PRO MOISTURE',
    variant: FraijourMenu.Indigo,
    link: PATH.lines.proMoisture,
  },
  {
    title: 'BIOME 5-LACTO',
    variant: FraijourMenu.NewYorkPink,
    link: PATH.lines.biome5lacto,
  },
];
