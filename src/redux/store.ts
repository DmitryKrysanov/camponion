import {createStore, compose, applyMiddleware} from 'redux';
import {rootReducer} from './reducers';
import thunkMiddleware from 'redux-thunk';
import {getFirebase} from 'react-redux-firebase';

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const middleware = [thunkMiddleware.withExtraArgument(getFirebase)];

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
  compose ||
  applyMiddleware(...middleware);

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);

const {dispatch} = store;

export type Dispatch = typeof dispatch;
