import React from 'react';
import {shallow} from 'enzyme';
import ContentWrapper from './ContentWrapper';

describe('<ContentWrapper />', () => {
  const uid = 'uid';
  const wrapper = shallow(<ContentWrapper uid={uid} />);
  it('renders withour errors', () => {
    const component = wrapper.find('.content_wrapper');
    expect(component.exists()).toBe(true);
  });
});
