import React from 'react';
import {mount} from 'enzyme';
import SignUp from './SignUp';

describe('<SignUp />', () => {
  const mockSignUp = jest.fn();

  const wrapper = mount(<SignUp signUp={mockSignUp} />);

  describe('renders without errors', () => {
    it('renders SignUp component', () => {
      const component = wrapper.find('.signup');
      expect(component.exists()).toBe(true);
    });

    it('renders SignUp title', () => {
      const component = wrapper.find('h1');
      expect(component.text()).toBe('Sign Up');
    });

    describe('submit form elements', () => {
      const form = wrapper.find('form');
      const firstName = wrapper.find('input[name="firstName"]');
      const email = wrapper.find('input[name="email"]');
      const password = wrapper.find('input[name="password"]');
      const submit = wrapper.find('button[type="submit"]');

      it('renders form', () => {
        expect(form.exists()).toBe(true);
      });

      it('renders first name input', () => {
        expect(firstName.exists()).toBe(true);
      });

      it('renders email input', () => {
        expect(email.exists()).toBe(true);
      });

      it('renders password input', () => {
        expect(password.exists()).toBe(true);
      });

      it('password input should change SignIn state', () => {
        expect(password.exists()).toBe(true);
      });

      it('renders submit button', () => {
        expect(submit.exists()).toBe(true);
        expect(submit.text()).toEqual('Sign Up');
      });

      it('submit button should be disabled', () => {
        const disabled = submit.prop('disabled');
        expect(disabled).toBe(true);
      });

      describe('terms', () => {
        it('checkbox should be Unchecked', () => {
          wrapper.setState({
            check: false,
          });
          const checkbox = wrapper.find('#checkbox');
          expect(checkbox.text()).toEqual('Unchecked');
        });

        it('checkbox should be Checked', () => {
          wrapper.setState({
            check: false,
          });
          const checkbox = wrapper.find('#checkbox');
          checkbox.simulate('click');
          expect(wrapper.state().check).toEqual(true);
          expect(checkbox.text()).toEqual('Checked');
        });

        it('renders terms text', () => {
          const terms = wrapper.find('.terms');
          expect(terms.exists()).toBe(true);
        });

        it('terms text should be equal to expected text', () => {
          const expectedText = 'I agree to the Terms and Conditions';
          const text = wrapper.find('.terms h4');
          expect(text.text()).toEqual(expectedText);
        });
      });

      it('submit button should be disabled', () => {
        wrapper.setState({
          check: true,
        });
        const submit = wrapper.find('button[type="submit"]');
        const disabled = submit.prop('disabled');
        expect(disabled).toBe(false);
      });

      it('submit form has an error', () => {
        firstName.simulate('change', {target: {value: 'D'}});
        email.simulate('change', {target: {value: 'd@d.com'}});
        password.simulate('change', {target: {value: 'Passw0rd'}});
        form.simulate('submit');
        expect(mockSignUp).not.toBeCalled();
      });

      it('should submit form by clicking on submit button', () => {
        firstName.simulate('change', {target: {value: 'Dima'}});
        email.simulate('change', {target: {value: 'd@d.com'}});
        password.simulate('change', {target: {value: 'Passw0rd'}});
        form.simulate('submit');

        expect(mockSignUp).toBeCalled();
      });
    });
  });
});
