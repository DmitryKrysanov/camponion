import React from 'react';
import {shallow} from 'enzyme';
import Auth from './Auth';
import {createStore} from 'redux';
import {rootReducer} from '../../redux/reducers';

const setup = (initialState: any) => {
  const store = createStore(rootReducer, initialState);
  const wrapper = shallow(<Auth store={store} />)
    .dive()
    .dive();
  return wrapper;
};

describe('<Auth />', () => {
  describe('renders without errors', () => {
    const initialState = {
      loaderReducer: {
        isLoad: false,
      },
      alertReducer: {
        alert: null,
      },
    };

    const wrapper = setup(initialState);

    it('renders Auth component', () => {
      const component = wrapper.find('.auth');
      expect(component.length).toBe(1);
    });

    it('Loader should not be appear', () => {
      const component = wrapper.find('Loader');
      expect(component.length).toBe(0);
    });

    it('renders Auth_img', () => {
      const component = wrapper.find('.auth_img');
      expect(component.length).toBe(1);
    });

    it('renders Auth_form', () => {
      const component = wrapper.find('.auth_form');
      expect(component.length).toBe(1);
    });

    it('Alert should not be appear', () => {
      const component = wrapper.find('Alert');
      expect(component.length).toBe(0);
    });
  });

  describe('Alert should be appear', () => {
    const initialState = {
      alertReducer: {
        alert: 'Somethisng went wrong',
      },
    };

    const wrapper = setup(initialState);

    it('renders Alert', () => {
      const component = wrapper.find('Alert');
      expect(component.length).toBe(1);
    });

    it('Alert message should be "Somethisng went wrong"', () => {
      const message = wrapper.find('Alert').dive().find('h4');
      expect(message.text()).toBe('Somethisng went wrong');
    });
  });

  describe('Loader should be appear', () => {
    const initialState = {
      loaderReducer: {
        isLoad: true,
      },
    };

    const wrapper = setup(initialState);

    it('renders Loader', () => {
      const component = wrapper.find('Loader');
      expect(component.length).toBe(1);
    });
  });
});
