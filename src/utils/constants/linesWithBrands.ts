import {PATH} from './routeConstants';

export enum allProductsLines {
  'RetineCollagen3DCore' = 'Retine-Collagen 3D Core',
  'HeartleafBlemish' = 'Heartleaf Blemish',
  'ProMoisture' = 'Pro moisture',
  'BiomeLacto' = 'Biome 5-Lacto',
  'YuzuHoney' = 'Yuzu honey',
  'OriginalHerbWormwood' = 'Original herb wormwood',
}

export const RETINE_COLLAGEN_PRODUCTS = [
  {
    title: 'Eye Core Cleansing Foam',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.retinCollagen3dCoreLine.cleansingFoam,
  },
  {
    title: 'Core Toner',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.retinCollagen3dCoreLine.toner,
  },
  {
    title: 'Ampoule Mist',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCore}/${PATH.retinCollagen3dCoreLine.eyeCream}`,
  },
  {
    title: 'Eye Cream',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.retinCollagen3dCoreLine.cream,
  },
  {
    title: 'Core Cream',
    description: `Core Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.retinCollagen3dCoreLine.ampouleMist,
  },
];

const HEARTLEAF_BLEMISH_PRODUCTS = [
  {
    title: 'Blemish pH Balanced Cleansing Foam',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.heartLeafLine.blemishphBalancedCleansingFoam,
  },
  {
    title: 'Blemish Toner',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.heartLeafLine.blemishToner,
  },
  {
    title: 'Intensive Calming Essence',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.heartLeafLine.intensiveCalmingEssence,
  },
  {
    title: 'Blemish Moisture Cream',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.heartLeafLine.blemishMoistureCream,
  },
  {
    title: 'Pore Melting Gel Mask',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.heartLeafLine.poreMeltingGelMask,
  },
];

const PRO_MOISTURE_PRODUCTS = [
  {
    title: 'Enzyme Powder Wash',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.proMoistureLine.enzymePowderWash,
  },
  {
    title: 'Sheet Mask',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.proMoistureLine.moistureSheetMask,
  },
  {
    title: 'Creamy Toner',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.proMoistureLine.creamyToner,
  },
  {
    title: 'Intensive Cream',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.proMoistureLine.intensiveCream,
  },
  {
    title: 'Milk Toning Clay Mask',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.proMoistureLine.milkToningClayMask,
  },
];

const BIOME_LACTO_PRODUCTS = [
  {
    title: 'Balance Toner',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.biome5lactoLine.balanceToner,
  },
  {
    title: 'Balance Moisturizer',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.biome5lactoLine.balanceMoisturizer,
  },
  {
    title: 'Treatment Ampoule',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.biome5lactoLine.treatmentAmpoule,
  },
  {
    title: 'Retexturizing Rosy Mask',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.biome5lactoLine.retexturizingRosyMask,
  },
  {
    title: 'Balance Gel Cleanser',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.biome5lactoLine.balanceGelCleanser,
  },
];

const YUZU_HONEY_PRODUCTS = [
  {
    title: '1Eye Core YUZU HONEY',
    description: `Нежный очищающий гель для 
      умывания на основе аминокислот. 
      Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.cleansingBalm,
  },
  {
    title: '2Core YUZU HONEY',
    description: `Core Toner для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.allClearCleansingFoam,
  },
  {
    title: '3Ampoule YUZU HONEY',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.essentialToner,
  },
  {
    title: '4Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.capsuleEyeCream,
  },
  {
    title: '5Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.enrichedCream,
  },
  {
    title: '6Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.yuzuHoneyLine.lipSleepingMask,
  },
];

const HERB_WORMWOOD_PRODUCTS = [
  {
    title: '1Eye Core HERB WORM',
    description: `Нежный очищающий гель для 
      умывания на основе аминокислот. 
      Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.cleansingOil,
  },
  {
    title: '2Core HERB',
    description: `Core Toner для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.cleansingFoam,
  },
  {
    title: '3Ampoule HERB',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.cleansingWater,
  },
  {
    title: '4Eye HERB_',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.peelingGel,
  },
  {
    title: '5Eye vHERB_WORMWOOD',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.sheetMask,
  },
  {
    title: '6Eye HERB WORMWOOD',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.o2Maskpack,
  },
  {
    title: '7Ampoul',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.calmingToner,
  },
  {
    title: '8Eye HERB ',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.phaPeelingEssence,
  },
  {
    title: '9Eye vHERB',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: PATH.originalHerbWormwoodLine.calmingWateryCream,
  },
];

export const PRODUCTS_LINES = [
  {
    title: allProductsLines.RetineCollagen3DCore,
    desciprtion: `Правильное решение для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: RETINE_COLLAGEN_PRODUCTS,
    path: PATH.lines.retinCollagen3dCore,
  },
  {
    title: allProductsLines.HeartleafBlemish,
    desciprtion: `heartleaf Blemish для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: HEARTLEAF_BLEMISH_PRODUCTS,
    path: PATH.lines.heartLeaf,
  },
  {
    title: allProductsLines.ProMoisture,
    desciprtion: `ProMoisture для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: PRO_MOISTURE_PRODUCTS,
    path: PATH.lines.proMoisture,
  },
  {
    title: allProductsLines.BiomeLacto,
    desciprtion: `BiomeLacto для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: BIOME_LACTO_PRODUCTS,
    path: PATH.lines.biome5lacto,
  },
  {
    title: allProductsLines.YuzuHoney,
    desciprtion: `YuzuHoney для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: YUZU_HONEY_PRODUCTS,
    path: PATH.lines.yuzuHoney,
  },
  {
    title: allProductsLines.OriginalHerbWormwood,
    desciprtion: `OriginalHerbWormwood для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: HERB_WORMWOOD_PRODUCTS,
    path: PATH.lines.originalHerbWormwood,
  },
];
