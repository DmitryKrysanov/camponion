import React from 'react';
import {shallow} from 'enzyme';
import EventDetails from './EventDetails';
import {createStore} from 'redux';
import {rootReducer} from '../../redux/reducers';
import {MemoryRouter} from 'react-router-dom';

describe('<EventDetails />', () => {
  const store = createStore(rootReducer);
  const wrapper = shallow(
    <MemoryRouter initialEntries={['/events/2']}>
      <EventDetails store={store} />
    </MemoryRouter>,
  ).dive();
  describe('renders without errors', () => {
    it('', () => {
      //   console.log(wrapper.debug());
    });
  });
});
