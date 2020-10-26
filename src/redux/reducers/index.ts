import {combineReducers} from 'redux';
import authReducer from './authReducer';
import {loaderReducer} from './loaderReducer';
import {alertReducer} from './alertReducer';
import eventReducer from './eventReducer';

export const rootReducer = combineReducers({
  authReducer,
  eventReducer,
  loaderReducer,
  alertReducer,
});
