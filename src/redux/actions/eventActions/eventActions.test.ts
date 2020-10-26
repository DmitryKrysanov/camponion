import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  createEvent,
  deleteEvent,
  getAllEvents,
  updateEvent,
} from './eventActions';
import moxios from 'moxios';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('event actions', () => {
  const events = [
    {
      title: 'Event 1',
      description: 'description',
      startDate: 'sdf',
      endDate: 'asd',
      costEstimation: 100,
      meetLocation: 'Office',
      eventLocation: 'Home',
      participants: [],
      _id: 'eventId',
    },
  ];

  let store: any;
  beforeEach(() => {
    moxios.install();
    store = mockStore({});
  });
  afterEach(() => {
    moxios.uninstall();
  });

  describe('getAllEvents action should be equal to the expected actions', () => {
    it('Success', async () => {
      const expectedActions = [
        'SHOW_LOADER',
        'GET_ALL_EVENTS',
        'EVENTS_UPDATED',
        'HIDE_LOADER',
      ];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 200, response: events});
      });

      return store.dispatch(getAllEvents()).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(getAllEvents()).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });

  describe('createEvent action should be equal to the expected actions', () => {
    it('Success', async () => {
      const expectedActions = ['SHOW_LOADER', 'EVENTS_UPDATED', 'HIDE_LOADER'];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 201});
      });

      return store.dispatch(createEvent(events[0])).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(createEvent(events[0])).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });

  describe('updateEvent action should be equal to the expected actions', () => {
    it('Success', async () => {
      const expectedActions = ['SHOW_LOADER', 'EVENTS_UPDATED', 'HIDE_LOADER'];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 200});
      });

      return store.dispatch(updateEvent(events[0])).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(updateEvent(events[0])).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(actualActions).toEqual(expectedActions);
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });

  describe('deleteEvent action should be equal to the expected actions', () => {
    it('Success', async () => {
      const expectedActions = ['SHOW_LOADER', 'EVENTS_UPDATED', 'HIDE_LOADER'];

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({status: 200});
      });

      return store.dispatch(deleteEvent(events[0]._id)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
      });
    });

    it('Error', async () => {
      const expectedActions = ['SHOW_LOADER', 'HIDE_LOADER', 'SHOW_ALERT'];
      const expectedErrorMessage = 'Something went wrong';

      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 500,
          response: {message: expectedErrorMessage},
        });
      });

      return store.dispatch(deleteEvent(events[0]._id)).then(() => {
        const actualActions = store
          .getActions()
          .map((action: any) => action.type);
        expect(actualActions).toEqual(expectedActions);
        const errorMessage = store
          .getActions()
          .find((action: any) => action.type === 'SHOW_ALERT').payload;
        expect(actualActions).toEqual(expectedActions);
        expect(errorMessage).toEqual(expectedErrorMessage);
      });
    });
  });
});
