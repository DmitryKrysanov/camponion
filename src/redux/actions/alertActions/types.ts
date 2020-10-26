import {HIDE_ALERT, SHOW_ALERT} from '../../constants/alertConstants';

export interface ShowAlertAction {
  type: typeof SHOW_ALERT;
  payload: string;
}

export interface HideAlertAction {
  type: typeof HIDE_ALERT;
}
