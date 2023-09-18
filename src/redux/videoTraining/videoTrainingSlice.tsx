import {PayloadAction, createSelector, createSlice} from '@reduxjs/toolkit';

import Video from '../../assets/videos/test.mp4';

import {IVideoTrainingState} from '../interfaces';
import {RootState} from '../store';

const initialState: IVideoTrainingState = {
  themes: [
    {
      id: 0,
      text: 'Зачем нужна вторая ступень ухода? Советы и рекомендации',
      video: Video,
    },
    {
      id: 1,
      text: 'Нанесение крема на лицо. Особенности ухода ступенями.',
      video: Video,
    },
    {
      id: 2,
      text: 'Нанесение крема на лицо. Особенности ухода ступенями.',
      video: Video,
    },
    {
      id: 3,
      text: 'Зачем нужна вторая ступень ухода? Советы и рекомендации',
      video: Video,
    },
  ],
  activeId: 0,
  isVideoPlay: false,
};

export const videoTrainingSlice = createSlice({
  name: 'stories',
  initialState,
  reducers: {
    setActiveId(state: IVideoTrainingState, action: PayloadAction<number>) {
      state.activeId = action.payload;
    },
    videoPlay(state: IVideoTrainingState) {
      state.isVideoPlay = true;
    },
    videoStop(state: IVideoTrainingState) {
      state.isVideoPlay = false;
    },
  },
});

const selectThemes = (state: RootState) =>
  state.videoTrainingSlice.themes;
export const getActiveVideoSelector = (id: number) =>
  createSelector([selectThemes], (themes) => {
    const value = themes.find((theme) => theme.id === id);
    return value?.video;
  });

export const {
  setActiveId,
  videoPlay,
  videoStop,
} = videoTrainingSlice.actions;
export default videoTrainingSlice.reducer;
