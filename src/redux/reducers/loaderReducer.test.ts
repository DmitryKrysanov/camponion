import {HIDE_LOADER, SHOW_LOADER} from '../constants/loaderConstants';
import {loaderReducer} from './loaderReducer';

const initialState = {
  isLoad: false,
};

describe('loader reducer', () => {
  it('should return the initial state', () => {
    expect(loaderReducer({...initialState}, {})).toEqual({...initialState});
  });

  it('isLoad should be true', () => {
    const action = {
      type: SHOW_LOADER,
      payload: {isLoad: true},
    };
    expect(loaderReducer(initialState, action)).toEqual({
      isLoad: true,
    });
  });

  it('isLoad should be false', () => {
    const action = {
      type: HIDE_LOADER,
      payload: {isLoad: false},
    };
    expect(loaderReducer(initialState, action)).toEqual({
      isLoad: false,
    });
  });
});
