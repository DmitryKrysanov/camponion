import {SignUpForm} from './../../../components/SignUp/SignUp';
import {hideAlert, showAlert} from './../alertActions/alertActions';
import {
  AUTH_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../../constants/authConstants';
import {SignInForm} from '../../../components/SignIn/SignIn';
import {SIGNIN_SUCCESS} from '../../constants/authConstants';
import {
  createUserInformation,
  deleteUserInformation,
} from '../../../utils/auth.utils';
import {
  SignInSuccessAction,
  SignOutSuccessAction,
  SignUpSuccessAction,
} from './types';
import {hideLoader, showLoader} from '../loaderActions/loaderActions';
import {IAuth} from '../../reducers/authReducer';
import axios from 'axios';

const url = 'http://localhost:5000/api/auth';

export const signInSuccess = (payload: IAuth): SignInSuccessAction => {
  return {
    type: SIGNIN_SUCCESS,
    payload,
  };
};

export const signIn = (userData: SignInForm) => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .post(`${url}/signin`, userData)
      .then(({data}) => {
        const uid = data.uid;
        const token = data.token;
        createUserInformation(token, uid);
        dispatch(signUpSuccess({uid, token, error: null}));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};

export const signOutSuccess = (): SignOutSuccessAction => {
  return {
    type: SIGNOUT_SUCCESS,
  };
};

export const signOut = () => {
  return (dispatch: any) => {
    dispatch(showLoader());
    deleteUserInformation();
    dispatch(signOutSuccess());
    dispatch(hideLoader());
  };
};

export const signUpSuccess = (payload: IAuth): SignUpSuccessAction => {
  return {
    type: SIGNUP_SUCCESS,
    payload,
  };
};

export const signUp = (userData: SignUpForm) => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .post(`${url}/signup`, userData)
      .then(({data}) => {
        const uid = data.uid;
        const token = data.token;
        createUserInformation(token, uid);
        dispatch(signUpSuccess({uid, token, error: null}));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};

export const saveUserAuthData = (userData: IAuth) => {
  return {
    type: AUTH_SUCCESS,
    payload: userData,
  };
};
