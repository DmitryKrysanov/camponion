import React from 'react';
import {shallow} from 'enzyme';
import IsNotAuthenticated from './IsNotAuthenticated';
import {MemoryRouter} from 'react-router-dom';

describe('<IsNotAuthenticated/ >', () => {
  const props = {
    match: 'match',
    params: 'params',
    history: 'history',
  };
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/events']}>
      <IsNotAuthenticated {...props} />)
    </MemoryRouter>,
  );
  it('without errors', () => {
    // console.log(wrapper.debug());
  });
});
