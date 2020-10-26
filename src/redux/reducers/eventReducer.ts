import {EVENTS_UPDATED} from './../constants/eventConstants';
import {GET_ALL_EVENTS} from '../constants/eventConstants';

export const initialState = {
  events: [],
  eventsUpdated: false,
};

export const eventReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_ALL_EVENTS:
      return {
        ...state,
        events: action.payload,
      };

    case EVENTS_UPDATED:
      return {
        ...state,
        eventsUpdated: action.payload,
      };

    default:
      return state;
  }
};

export default eventReducer;
