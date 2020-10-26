import {HIDE_ALERT, SHOW_ALERT} from '../constants/alertConstants';
import {alertReducer} from './alertReducer';

const initialState = {
  alert: null,
};

describe('alert reducer', () => {
  it('should return the initial state', () => {
    expect(alertReducer({...initialState}, {})).toEqual({
      ...initialState,
    });
  });

  it('alert should be displayed', () => {
    const action = {
      type: SHOW_ALERT,
      payload: {alert: 'alert'},
    };
    expect(alertReducer(initialState, action)).toEqual({
      alert: {alert: 'alert'},
    });
  });

  it('alert should be hidden', () => {
    const action = {
      type: HIDE_ALERT,
      payload: {alert: 'alert'},
    };
    expect(alertReducer(initialState, action)).toEqual({
      alert: null,
    });
  });
});
