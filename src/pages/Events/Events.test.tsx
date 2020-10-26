import React from 'react';
import {shallow} from 'enzyme';
import Events from './Events';
import {createStore} from 'redux';
import {rootReducer} from '../../redux/reducers';

describe('<Events />', () => {
  describe('renders without errors', () => {
    const store = createStore(rootReducer);
    const wrapper = shallow(<Events store={store} />)
      .dive()
      .dive();
    it('renders Event component', () => {
      const component = wrapper.find('.events');
      expect(component.length).toBe(1);
    });

    it('renders Event header', () => {
      const component = wrapper.find('.events_header');
      expect(component.length).toBe(1);
    });

    it('renders Event header title', () => {
      const component = wrapper.find('h1');
      expect(component.length).toBe(1);
    });

    it('Event header title should be "Events"', () => {
      const component = wrapper.find('h1');
      expect(component.text()).toBe('Events');
    });

    it('renders Events content', () => {
      const component = wrapper.find('.events_content');
      expect(component.length).toBe(1);
    });

    it('renders Events content left', () => {
      const component = wrapper.find('.content__left');
      expect(component.length).toBe(1);
    });

    it('renders Events content right', () => {
      const component = wrapper.find('.content__right');
      expect(component.length).toBe(1);
    });
  });

  describe('Redux props', () => {
    const initialState: any = {
      loaderReducer: {
        isLoad: true,
      },
      eventReducer: {
        events: [],
      },
    };
    const store = createStore(rootReducer, initialState);
    const wrapper = shallow(<Events store={store} />).dive();

    it('Event props should be equal initialState isLoad', () => {
      const isLoadProps = wrapper.prop('isLoad');
      expect(isLoadProps).toEqual(initialState.loaderReducer.isLoad);
    });

    it('Event props should be equal initialState events', () => {
      const eventsProps = wrapper.prop('events');
      expect(eventsProps).toEqual(initialState.eventReducer.events);
    });

    it('getAllEvents props should be a function', () => {
      const getAllEventsProps = wrapper.prop('getAllEvents');
      expect(getAllEventsProps).toBeInstanceOf(Function);
    });
  });
});
