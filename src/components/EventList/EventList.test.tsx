import React from 'react';
import {shallow} from 'enzyme';
import EventList from './EventList';

describe('<EventList />', () => {
  describe('events array is empty', () => {
    const props = {
      events: [],
      isLoad: false,
      getEvent: () => undefined,
    };

    const wrapper = shallow(<EventList {...props} />);

    it('should render empty state container', () => {
      const emptyState = wrapper.find('.list_empty_state');
      expect(emptyState.exists()).toBe(true);
    });

    it('should render empty state icon', () => {
      const emptyState = wrapper.find('svg');
      expect(emptyState.exists()).toBe(true);
    });

    it('should render empty state text', () => {
      const emptyState = wrapper.find('h3');
      expect(emptyState.exists()).toBe(true);
      expect(emptyState.text()).toEqual('Add new event');
    });
  });

  describe('events array has items', () => {
    const props = {
      events: [
        {
          title: 'event',
          startDate: '12/05/2020',
          endDate: '12/05/2020',
          costEstimation: 100,
          _id: 'event id1',
        },
        {
          title: 'event 2',
          startDate: '15/05/2020',
          endDate: '15/05/2020',
          costEstimation: 200,
          _id: 'event id2',
        },
      ],
      isLoad: false,
      getEvent: () => undefined,
    };
    const wrapper = shallow(<EventList {...props} />);

    it('list renders a few event list items', () => {
      const list = wrapper.find('.list');
      expect(list.children()).toHaveLength(props.events.length);
    });
  });

  describe('loader renders without errors', () => {
    const props = {
      events: [],
      isLoad: true,
      getEvent: () => undefined,
    };
    const wrapper = shallow(<EventList {...props} />);

    it('loader should be appear', () => {
      const loader = wrapper.find('Loader');
      expect(loader.exists()).toBe(true);
    });
  });
});
