import {HIDE_ALERT, SHOW_ALERT} from '../../constants/alertConstants';
import {HideAlertAction, ShowAlertAction} from './types';

export const showAlert = (payload: string): ShowAlertAction => ({
  type: SHOW_ALERT,
  payload,
});

export const hideAlert = (): HideAlertAction => ({
  type: HIDE_ALERT,
});
