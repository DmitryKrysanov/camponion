import React from 'react';
import {mount} from 'enzyme';
import Alert from './Alert';

describe('<Alert />', () => {
  describe('Error alert renders without errors', () => {
    const props = {
      message: 'Alert message',
      type: 'error',
    };
    const wrapper = mount(<Alert message={props.message} type={props.type} />);

    it('Alert has "alert__error" class', () => {
      const component = wrapper.find('.alert');
      expect(component.hasClass('alert__error')).toBe(true);
    });

    it('renders message', () => {
      const message = wrapper.find('h4');
      expect(message.length).toBe(1);
      expect(message.text()).toEqual(props.message);
    });

    it('props should be equal', () => {
      expect(wrapper.prop('message')).toEqual(props.message);
      expect(wrapper.prop('type')).toEqual(props.type);
    });
  });

  describe('Success alert renders without errors', () => {
    const props = {
      message: 'Alert message',
      type: 'success',
    };
    const wrapper = mount(<Alert message={props.message} type={props.type} />);

    it('Alert has "alert__success" class', () => {
      const component = wrapper.find('.alert');
      expect(component.hasClass('alert__success')).toBe(true);
    });

    it('renders message', () => {
      const message = wrapper.find('h4');
      expect(message.length).toBe(1);
      expect(message.text()).toEqual(props.message);
    });

    it('props should be equal', () => {
      expect(wrapper.prop('message')).toEqual(props.message);
      expect(wrapper.prop('type')).toEqual(props.type);
    });
  });
});
