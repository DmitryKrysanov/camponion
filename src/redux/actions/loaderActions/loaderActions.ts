import {HIDE_LOADER, SHOW_LOADER} from '../../constants/loaderConstants';
import {HideLoaderAction, ShowLoaderAction} from './types';

export const showLoader = (): ShowLoaderAction => ({
  type: SHOW_LOADER,
});

export const hideLoader = (): HideLoaderAction => ({
  type: HIDE_LOADER,
});
