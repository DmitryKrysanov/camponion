import {EVENTS_UPDATED, GET_ALL_EVENTS} from '../constants/eventConstants';
import eventReducer from './eventReducer';

const initialState = {
  events: [],
  eventsUpdated: false,
};

describe('eventReducer', () => {
  it('should return the initial state', () => {
    expect(eventReducer(initialState, {})).toEqual({...initialState});
  });

  it('events updated flag updates', () => {
    const action = {
      type: EVENTS_UPDATED,
      payload: {eventsUpdated: true},
    };
    const value = eventReducer(initialState, action).eventsUpdated;
    expect(value).toEqual({
      eventsUpdated: true,
    });
  });

  it('get all events from back-end', () => {
    const action = {
      type: GET_ALL_EVENTS,
      payload: {events: [{title: 'event 1'}, {title: 'event 2'}]},
    };
    expect(eventReducer(initialState, action)).toEqual({
      events: {
        events: [{title: 'event 1'}, {title: 'event 2'}],
      },
      eventsUpdated: false,
    });
  });
});
