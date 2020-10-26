import {
  SIGNIN_SUCCESS,
  SIGNOUT_SUCCESS,
  SIGNUP_SUCCESS,
} from '../../constants/authConstants';
import {IAuth} from '../../reducers/authReducer';

export interface SignInSuccessAction {
  type: typeof SIGNIN_SUCCESS;
  payload: IAuth;
}

export interface SignOutSuccessAction {
  type: typeof SIGNOUT_SUCCESS;
}

export interface SignUpSuccessAction {
  type: typeof SIGNUP_SUCCESS;
  payload: IAuth;
}
