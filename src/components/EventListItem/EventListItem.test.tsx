import React from 'react';
import {shallow} from 'enzyme';
import EventListItem from './EventListItem';

describe('<EventListItem />', () => {
  const props = {
    event: {
      title: 'event',
      startDate: '12/05/2020',
      endDate: '12/05/2020',
      costEctimation: 100,
      meetupLocation: 'any',
      eventLocation: 'any',
      _id: 'event id',
    },
    getEvent: () => undefined,
  };
  const getEvent = jest.fn();
  const wrapper = shallow(<EventListItem {...props} getEvent={getEvent} />);

  describe('renders without errors', () => {
    it('renders Event list item component', () => {
      const component = wrapper.find('.event_list_item');
      expect(component.exists()).toBe(true);
    });

    it('title should be equil to props', () => {
      const component = wrapper.find('h3');
      expect(component.text()).toEqual(props.event.title);
    });

    it('end date should be equil to props', () => {
      const component = wrapper.find('h4');
      expect(component.text()).toEqual(props.event.startDate);
    });

    it('function should be called', () => {
      const component = wrapper.find('.event_list_item');
      component.simulate('click');
      expect(getEvent).toHaveBeenCalled();
    });
  });
});
