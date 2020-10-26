import {createStore} from 'redux';
import {rootReducer} from '../../reducers';
import {hideLoader, showLoader} from './loaderActions';

describe('loader actions', () => {
  let store: any;
  beforeEach(() => {
    const initialState = {
      loaderReducer: {
        isLoad: false,
      },
    };
    store = createStore(rootReducer, initialState);
  });

  it('show loader should be true', () => {
    store.dispatch(showLoader());
    const newState = store.getState();
    expect(newState.loaderReducer.isLoad).toEqual(true);
  });

  it('show loader should be false', () => {
    store.dispatch(hideLoader());
    const newState = store.getState();
    expect(newState.loaderReducer.isLoad).toEqual(false);
  });
});
