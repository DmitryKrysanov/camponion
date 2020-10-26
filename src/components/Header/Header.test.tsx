import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';

describe('Header component IsAuthenticated', () => {
  const uid = 'uid';
  const wrapper = shallow(<Header uid={uid} />);

  it('renders Header component', () => {
    const header = wrapper.find('.header');
    expect(header.length).toBe(1);
  });

  it('renders title', () => {
    const header = wrapper.find('h3');
    expect(header.length).toBe(1);
  });

  it('title should be "CampOnion"', () => {
    const header = wrapper.find('h3');
    expect(header.text()).toBe('CampOnion');
  });

  it('IsAuthenticated component should be appear', () => {
    const component = wrapper.find('Connect(withRouter(IsAuthenticated))');
    expect(component.length).toBe(1);
  });

  it('IsNotAuthenticated component should not be appear', () => {
    const component = wrapper.find('withRouter(IsNotAuthenticated)');
    expect(component.length).toBe(0);
  });
});

describe('Header component IsNotAuthenticated', () => {
  const uid = null;
  const wrapper = shallow(<Header uid={uid} />);

  it('IsAuthenticated component should not be appear', () => {
    const component = wrapper.find('Connect(withRouter(IsAuthenticated))');
    expect(component.length).toBe(0);
  });

  it('IsNotAuthenticated component should be appear', () => {
    const component = wrapper.find('withRouter(IsNotAuthenticated)');
    expect(component.length).toBe(1);
  });
});
