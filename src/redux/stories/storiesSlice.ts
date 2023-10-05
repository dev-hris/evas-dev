import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';

import background1
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background1.png';
import background2
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background2.png';
import background3
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background3.png';
import background4
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background4.png';
import background5
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background5.png';
import background6
  from '../../assets/images/fraijourMain/backgroundMobileForBottle/background6.png';
import bottle1 from '../../assets/images/fraijourMain/main/bottle1.png';
import bottle2 from '../../assets/images/fraijourMain/main/bottle2.png';
import bottle3 from '../../assets/images/fraijourMain/main/bottle3.png';
import bottle4 from '../../assets/images/fraijourMain/main/bottle4.png';
import bottle5 from '../../assets/images/fraijourMain/main/bottle5.png';
import bottle6 from '../../assets/images/fraijourMain/main/bottle6.png';

import {IStoriesState} from '../interfaces';
import {RootState} from '../store';
import {ColorVariant} from '../../utils/enums/enum';
import {ButtonVariant} from '../../utils/constants/buttonVariantEnum';
import {PATH} from '../../utils/constants/routeConstants';

const initialState: IStoriesState = {
  storiesValue: [
    {
      backgroundUrl: background1,
      bottleUrl: bottle1,
      path: {
        line: PATH.lines.biome5lacto,
        product: PATH.biome5lactoLine.balanceGelCleanser,
      },
      index: 0,
      colors: {
        button: ButtonVariant.NewYorkPink,
        text: ColorVariant.NewYorkPink,
      },
    },
    {
      backgroundUrl: background2,
      path: {
        line: PATH.lines.proMoisture,
        product: PATH.proMoistureLine.moistureSheetMask,
      },
      bottleUrl: bottle2,
      index: 1,
      colors: {
        button: ButtonVariant.Indigo,
        text: ColorVariant.Indigo,
      },
    },
    {
      backgroundUrl: background3,
      path: {
        line: PATH.lines.originalHerbWormwood,
        product: PATH.originalHerbWormwoodLine.calmingToner,
      },
      bottleUrl: bottle3,
      index: 2,
      colors: {
        button: ButtonVariant.AquaForest,
        text: ColorVariant.AquaForest,
      },
    },
    {
      backgroundUrl: background4,
      path: {
        line: PATH.lines.heartLeaf,
        product: PATH.heartLeafLine.intensiveCalmingEssence,
      },
      bottleUrl: bottle4,
      index: 3,
      colors: {
        button: ButtonVariant.GreenSmoke,
        text: ColorVariant.GreenSmoke,
      },
    },
    {
      backgroundUrl: background5,
      path: {
        line: PATH.lines.retinCollagen3dCore,
        product: PATH.retinCollagen3dCoreLine.ampouleMist,
      },
      bottleUrl: bottle5,
      index: 4,
      colors: {
        button: ButtonVariant.Primary,
        text: ColorVariant.Portage,
      },
    },
    {
      backgroundUrl: background6,
      path: {
        line: PATH.lines.yuzuHoney,
        product: PATH.yuzuHoneyLine.lipSleepingMask,
      },
      bottleUrl: bottle6,
      index: 5,
      colors: {
        button: ButtonVariant.Ronchi,
        text: ColorVariant.Ronchi,
      },
    },
  ],
  activeStory: 0,
  isShowStories: false,
};

export const storiesSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    showStories(state: IStoriesState) {
      state.isShowStories = true;
    },
    hideStories(state: IStoriesState) {
      state.isShowStories = false;
    },
    nextStory(state: IStoriesState) {
      if (state.activeStory !== state.storiesValue.length - 1) {
        state.activeStory += 1;
      } else {
        state.activeStory = 0;
      }
    },
    previousStory(state: IStoriesState) {
      if (state.activeStory !== 0) {
        state.activeStory -= 1;
      } else {
        state.activeStory = state.storiesValue.length - 1;
      }
    },
    checkoutStory(state: IStoriesState, action: PayloadAction<number>) {
      state.activeStory = action.payload;
    },
  },
});

const selectStateStoriesValue = (state: RootState) =>
  state.storiesSlice.storiesValue;
export const getActiveStoryUrls = (activeStory: number) =>
  createSelector([selectStateStoriesValue], (storiesValue) => {
    const storyValue = storiesValue.find(
      (storyValue) => storyValue.index === activeStory,
    );
    if (storyValue) {
      const {backgroundUrl, bottleUrl} = storyValue;
      return {backgroundUrl, bottleUrl};
    }
    return {backgroundUrl: '', bottleUrl: ''};
  });

export const getActiveStoryColorsAndPath = (activeStory: number) =>
  createSelector([selectStateStoriesValue], (storiesValue) => {
    const storyValue = storiesValue.find(
      (storyValue) => storyValue.index === activeStory,
    );
    if (storyValue) {
      const {colors, path} = storyValue;
      return {...colors, ...path};
    }
    return {button: null, text: null, line: null, product: null};
  });

export const {
  showStories,
  hideStories,
  nextStory,
  previousStory,
  checkoutStory,
} = storiesSlice.actions;
export default storiesSlice.reducer;
