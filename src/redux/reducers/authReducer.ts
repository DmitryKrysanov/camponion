import {
  AUTH_SUCCESS,
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../constants/authConstants';
import Cookies from 'js-cookie';

const token = Cookies.get('token') || Cookies.get('refreshToken');
const id = Cookies.get('uid');

export interface IAuth {
  uid: string | null;
  token: string | null;
  error: string | null;
}

export const initialState: IAuth = {
  uid: id || null,
  token: token || null,
  error: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AUTH_SUCCESS:
    case SIGNIN_SUCCESS:
    case SIGNUP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        uid: action.payload.uid,
      };
    case SIGNOUT_SUCCESS:
      return {
        ...state,
        token: null,
        uid: null,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
