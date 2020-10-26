import {HIDE_ALERT, SHOW_ALERT} from '../constants/alertConstants';

export interface AlertState {
  alert: string | null;
}

const initialState: AlertState = {
  alert: null,
};

export const alertReducer = (state = initialState, action: any): AlertState => {
  switch (action.type) {
    case SHOW_ALERT:
      return {...state, alert: action.payload};
    case HIDE_ALERT:
      return {...state, alert: null};
    default:
      return state;
  }
};
