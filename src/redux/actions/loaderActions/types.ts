import {HIDE_LOADER, SHOW_LOADER} from '../../constants/loaderConstants';

export interface ShowLoaderAction {
  type: typeof SHOW_LOADER;
}

export interface HideLoaderAction {
  type: typeof HIDE_LOADER;
}
