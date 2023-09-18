import {ButtonVariant} from '../utils/constants/buttonVariantEnum';
import {ColorVariant} from '../utils/enums/enum';

export interface IStore {
  content: IContentState,
  stories: IStoriesState,
}

export interface IContentState {
  activeLine: string;
  allProducts: string[];
  activeProduct: string;
  line: ILine | undefined;
  product: IProduct | undefined;
}

export interface IContentActionHandler {
  state: IContentState;
  payload: IProduct | ILine | null;
}

export interface IAction<T> {
  type: string;
  payload: T;
}

export interface IVideoTrainingState {
  themes: IVideoTrainingTheme[];
  activeId: number;
  isVideoPlay: boolean;
}

export interface IVideoTrainingTheme {
  id: number;
  text: string;
  video: string
}

export interface IStoryValues {
  index: number;
  backgroundUrl: string;
  bottleUrl: string;
  colors: {
    button: ButtonVariant;
    text: ColorVariant;
  };
  path: IPath;
}

export interface IStoriesState {
  isShowStories: boolean;
  storiesValue: IStoryValues[];
  activeStory: number;
}

export interface IPath {
  line: string;
  product: string;
}

export interface IProduct {
  id?: any;
}

export interface ILine {
  id?: any;
}
