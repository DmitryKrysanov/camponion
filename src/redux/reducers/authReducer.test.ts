import {
  AUTH_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../constants/authConstants';
import authReducer from './authReducer';

const initialState = {
  uid: null,
  token: null,
  error: null,
};

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(authReducer({...initialState}, {})).toEqual({...initialState});
  });

  it('auth success', () => {
    const action = {
      type: AUTH_SUCCESS,
      payload: {uid: 'uid', token: 'token'},
    };
    expect(authReducer(initialState, action)).toEqual({
      uid: 'uid',
      token: 'token',
      error: null,
    });
  });

  it('sign in success', () => {
    expect(
      authReducer(
        {...initialState},
        {
          type: SIGNIN_SUCCESS,
          payload: {uid: 'uid', token: 'token'},
        },
      ),
    ).toEqual({
      uid: 'uid',
      token: 'token',
      error: null,
    });
  });

  it('sign out', () => {
    expect(
      authReducer(
        {uid: 'uid', token: 'token', error: null},
        {
          type: SIGNOUT_SUCCESS,
        },
      ),
    ).toEqual({...initialState});
  });

  it('sign up success', () => {
    expect(
      authReducer(
        {...initialState},
        {
          type: SIGNUP_SUCCESS,
          payload: {uid: 'uid', token: 'token'},
        },
      ),
    ).toEqual({
      uid: 'uid',
      token: 'token',
      error: null,
    });
  });
});
