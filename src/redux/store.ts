import {combineReducers, configureStore} from '@reduxjs/toolkit';

import storiesSlice from './stories/storiesSlice';
import contentSlice from './content/contentSlice';
import videoTrainingSlice from './videoTraining/videoTrainingSlice';

const rootReducer = combineReducers({
  storiesSlice,
  contentSlice,
  videoTrainingSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
