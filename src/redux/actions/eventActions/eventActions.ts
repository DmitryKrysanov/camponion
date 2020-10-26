import {GET_ALL_EVENTS, EVENTS_UPDATED} from '../../constants/eventConstants';
import {IEvent} from '../../../pages/Events/types';
import {hideLoader, showLoader} from './../loaderActions/loaderActions';
import {
  EventActionsTypes,
  eventsUpdatedAction,
  GetAllEventsAction,
} from './types';
import {hideAlert, showAlert} from '../alertActions/alertActions';
import {ThunkAction} from 'redux-thunk';
import {AppStateType} from '../../store';
import axios from 'axios';

const url = '/api/events';

type ThunkType = ThunkAction<
  Promise<void>,
  AppStateType,
  unknown,
  EventActionsTypes
>;

export const eventsUpdatedSuccess = (payload: boolean): eventsUpdatedAction => {
  return {
    type: EVENTS_UPDATED,
    payload,
  };
};

export const getAllEventsSuccess = (payload: IEvent[]): GetAllEventsAction => {
  return {
    type: GET_ALL_EVENTS,
    payload,
  };
};

export const getAllEvents = (): ThunkType => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .get(url)
      .then((resp) => {
        const events = resp.data;
        dispatch(getAllEventsSuccess(events));
        dispatch(eventsUpdatedSuccess(true));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};

export const createEvent = (payload: IEvent) => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .post(url, payload)
      .then(() => {
        dispatch(eventsUpdatedSuccess(false));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};

export const updateEvent = (event: IEvent) => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .put(`${url}/${event._id}`, event)
      .then(() => {
        dispatch(eventsUpdatedSuccess(false));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};

export const deleteEvent = (eventId: string) => {
  return async (dispatch: any) => {
    dispatch(showLoader());
    await axios
      .delete(`${url}/${eventId}`)
      .then(() => {
        dispatch(eventsUpdatedSuccess(false));
        dispatch(hideLoader());
      })
      .catch((error) => {
        dispatch(hideLoader());
        dispatch(showAlert(error.response.data.message));
        setTimeout(() => {
          dispatch(hideAlert());
        }, 3000);
      });
  };
};
