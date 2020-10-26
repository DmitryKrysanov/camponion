import {HIDE_LOADER, SHOW_LOADER} from '../constants/loaderConstants';

export interface LoaderState {
  isLoad: boolean;
}

const initialState: LoaderState = {
  isLoad: false,
};

export const loaderReducer = (
  state = initialState,
  action: any,
): LoaderState => {
  switch (action.type) {
    case SHOW_LOADER:
      return {...state, isLoad: true};
    case HIDE_LOADER:
      return {...state, isLoad: false};
    default:
      return state;
  }
};
