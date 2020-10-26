import {hideAlert, showAlert} from './alertActions';
import {createStore} from 'redux';
import {rootReducer} from '../../reducers';

describe('loader actions', () => {
  let store: any;
  beforeEach(() => {
    const initialState = {
      alertReducer: {
        alert: null,
      },
    };
    store = createStore(rootReducer, initialState);
  });

  it('alert should be displayed', () => {
    const alert = 'alert';
    store.dispatch(showAlert(alert));
    const newState = store.getState();
    expect(newState.alertReducer.alert).toEqual(alert);
  });

  it('alert should be hidden', () => {
    store.dispatch(hideAlert());
    const newState = store.getState();
    expect(newState.alertReducer.alert).toEqual(null);
  });
});
