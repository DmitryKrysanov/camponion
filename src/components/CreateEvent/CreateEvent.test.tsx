import React from 'react';
import {mount, shallow} from 'enzyme';
import CreateEvent from './CreateEvent';
import {createStore} from 'redux';
import {rootReducer} from '../../redux/reducers';
import {showLoader} from '../../redux/actions/loaderActions/loaderActions';
import {showAlert} from '../../redux/actions/alertActions/alertActions';

describe('<CreateEvent />', () => {
  const store = createStore(rootReducer);

  const wrapper = shallow(<CreateEvent store={store} />)
    .dive()
    .dive();

  describe('renders without errors', () => {
    it('renders CreateEvent component', () => {
      const component = wrapper.find('.create_event');
      expect(component.exists()).toBe(true);
    });

    it('renders FAB component', () => {
      const component = wrapper.find('WithStyles(ForwardRef(Fab))');
      expect(component.exists()).toBe(true);
    });

    it('renders Dialog component', () => {
      const component = wrapper.find('WithStyles(ForwardRef(Dialog))');
      expect(component.exists()).toBe(true);
    });

    it('renders DialogTitle component', () => {
      const component = wrapper.find('WithStyles(ForwardRef(DialogTitle))');
      expect(component.exists()).toBe(true);
      expect(component.text()).toEqual('Create Event');
    });

    it('renders DialogContent component', () => {
      const component = wrapper.find('WithStyles(ForwardRef(DialogContent))');
      expect(component.exists()).toBe(true);
    });

    it('renders Form component', () => {
      const component = wrapper.find('ReactFinalForm');
      expect(component.exists()).toBe(true);
    });

    describe('renders Form component children', () => {
      const formComponent = wrapper.find('ReactFinalForm').dive().dive();

      it('renders form', () => {
        const form = formComponent.find('form');
        expect(form.exists()).toBe(true);
      });

      it('renders title input', () => {
        const titleInput = formComponent.find(
          'ForwardRef(Field)[name="title"]',
        );
        expect(titleInput.exists()).toBe(true);
      });

      it('renders description input', () => {
        const descriptionInput = formComponent.find(
          'ForwardRef(Field)[name="description"]',
        );
        expect(descriptionInput.exists()).toBe(true);
      });

      it('renders start date input', () => {
        const startDateInput = formComponent.find(
          'ForwardRef(Field)[name="startDate"]',
        );
        expect(startDateInput.exists()).toBe(true);
      });

      it('renders end date input', () => {
        const endDateInput = formComponent.find(
          'ForwardRef(Field)[name="endDate"]',
        );
        expect(endDateInput.exists()).toBe(true);
      });

      it('renders cost estimation input', () => {
        const costEstimation = formComponent.find(
          'ForwardRef(Field)[name="costEstimation"]',
        );
        expect(costEstimation.exists()).toBe(true);
      });

      it('renders meetup location input', () => {
        const meetupLocationInput = formComponent.find(
          'ForwardRef(Field)[name="meetupLocation"]',
        );
        expect(meetupLocationInput.exists()).toBe(true);
      });

      it('renders event location input', () => {
        const eventLocationInput = formComponent.find(
          'ForwardRef(Field)[name="eventLocation"]',
        );
        expect(eventLocationInput.exists()).toBe(true);
      });
    });
  });

  describe('Loader should not be displayed', () => {
    it('Loader should not be displayed', () => {
      const loader = wrapper.find('Loader');
      expect(loader.exists()).toBe(false);
    });

    it('Loader should be displayed', () => {
      store.dispatch(showLoader());
      const wrapper = shallow(<CreateEvent store={store} />)
        .dive()
        .dive();
      const loader = wrapper.find('Loader');
      expect(loader.exists()).toBe(true);
    });
  });

  describe('hendle click buttons', () => {
    it('handle Click Open should change state', () => {
      const fab = wrapper.find('WithStyles(ForwardRef(Fab))').dive();
      fab.simulate('click');
      expect(wrapper.state()).toEqual({open: true});
    });

    it('Cancel button should change state', () => {
      const cancelBtn = wrapper
        .find('ReactFinalForm')
        .dive()
        .dive()
        .find('form')
        .find('WithStyles(ForwardRef(Button))[children="Cancel"]');
      cancelBtn.simulate('click');
      expect(wrapper.state()).toEqual({open: false});
    });
  });

  describe('Alert', () => {
    it('Alert should be displayed', () => {
      const alertMessage = 'Alert message';
      store.dispatch(showAlert(alertMessage));
      const wrapper = shallow(<CreateEvent store={store} />)
        .dive()
        .dive();
      const alert = wrapper.find('Alert');
      expect(alert.exists()).toBe(true);
      expect(alert.prop('message')).toEqual(alertMessage);
    });
  });
});
