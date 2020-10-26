import {EVENTS_UPDATED} from './../../constants/eventConstants';
import {IEvent} from './../../../pages/Events/types';
import {GET_ALL_EVENTS} from '../../constants/eventConstants';

export interface GetAllEventsAction {
  type: typeof GET_ALL_EVENTS;
  payload: IEvent[];
}

export interface eventsUpdatedAction {
  type: typeof EVENTS_UPDATED;
  payload: boolean;
}

export type EventActionsTypes = GetAllEventsAction | eventsUpdatedAction;
