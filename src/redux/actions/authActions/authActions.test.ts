import {
  saveUserAuthData,
  signIn,
  signInSuccess,
  signOut,
  signOutSuccess,
  signUp,
  signUpSuccess,
} from './authActions';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('auth actions', () => {
  const auth = {
    uid: 'uid',
    token: 'token',
    error: null,
  };
  let store: any;
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('signInSuccess action should be equal to the expected actions', () => {
    it('Success', () => {
      const expectedActions = ['SIGNIN_SUCCESS'];
      store.dispatch(signInSuccess(auth));
      const actualActions = store
        .getActions()
        .map((action: any) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  describe('signIn action should be equal to the expected actions', () => {
    const signInForm = {
      email: 'email@email.com',
      password: 'Qwerty1',
    };

    it('Success', async () => {
      const expectedActions = ['SHOW_LOADER', 'SIGNUP_SUCCESS', 'HIDE_LOADER'];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 201, response: auth});
      });

      return store.dispatch(signIn(signInForm)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(signIn(signInForm)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });

  describe('signOutSuccess action should be equal to the expected actions', () => {
    it('Success', () => {
      const expectedActions = ['SIGNOUT_SUCCESS'];
      store.dispatch(signOutSuccess());
      const actualActions = store
        .getActions()
        .map((action: any) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  describe('signOut action should be equal to the expected actions', () => {
    it('Success', () => {
      const expectedActions = ['SHOW_LOADER', 'SIGNOUT_SUCCESS', 'HIDE_LOADER'];
      store.dispatch(signOut());
      const actualActions = store
        .getActions()
        .map((action: any) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  describe('signUpSuccess action should be equal to the expected actions', () => {
    it('Success', () => {
      const expectedActions = ['SIGNUP_SUCCESS'];
      store.dispatch(signUpSuccess(auth));
      const actualActions = store
        .getActions()
        .map((action: any) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });

  describe('signUp action should be equal to the expected actions', () => {
    const signUpForm = {
      firstName: 'User',
      email: 'email@email.com',
      password: 'Qwerty1',
    };

    it('Success', async () => {
      const expectedActions = ['SHOW_LOADER', 'SIGNUP_SUCCESS', 'HIDE_LOADER'];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 201, response: auth});
      });

      return store.dispatch(signUp(signUpForm)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(signUp(signUpForm)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });

  describe('saveUserAuthData action should be equal to the expected actions', () => {
    it('Success', () => {
      const expectedActions = ['AUTH_SUCCESS'];
      store.dispatch(saveUserAuthData(auth));
      const actualActions = store
        .getActions()
        .map((action: any) => action.type);
      expect(actualActions).toEqual(expectedActions);
    });
  });
});
