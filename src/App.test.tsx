import React from 'react';
import {shallow} from 'enzyme';
import App from './App';
import {createStore} from 'redux';
import {rootReducer} from './redux/reducers';

describe('<App />', () => {
  describe('renders without errors', () => {
    const store = createStore(rootReducer);
    const wrapper = shallow(<App store={store} />)
      .dive()
      .dive();

    it('renders App component', () => {
      const component = wrapper.find('.app');
      expect(component.length).toBe(1);
    });

    it('renders ContentWrapper component', () => {
      const component = wrapper.find('.content_wrapper');
      expect(component.length).toBe(1);
    });
  });

  describe('Redux props', () => {
    const initialState = {
      authReducer: {
        uid: 'uid',
        token: 'token',
        error: 'error',
      },
    };
    const store = createStore(rootReducer, initialState);
    const wrapper = shallow(<App store={store} />).dive();

    it('App props should be equal expectedAppProps', () => {
      const expectedAppProps = {
        uid: 'uid',
        token: 'token',
        error: 'error',
      };
      const componentAppProps = wrapper.prop('auth');
      expect(componentAppProps).toEqual(expectedAppProps);
    });
  });
});
