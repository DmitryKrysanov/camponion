import React from 'react';
import {shallow} from 'enzyme';
import SignIn from './SignIn';

describe('<SignIn />', () => {
  const mockSignIn = jest.fn();
  const wrapper = shallow(<SignIn signIn={mockSignIn} />);

  describe('renders without errors', () => {
    it('renders SignIn component', () => {
      const component = wrapper.find('.signin');
      expect(component.exists()).toBe(true);
    });

    it('renders SignIn title', () => {
      const component = wrapper.find('h1');
      expect(component.text()).toBe('Sign In');
    });

    describe('submit form elements', () => {
      const form = wrapper.find('form');
      const email = wrapper.find('input[type="email"]');
      const password = wrapper.find('input[type="password"]');
      const submit = wrapper.find('button');

      it('renders form', () => {
        expect(form.exists()).toBe(true);
      });

      it('renders email input', () => {
        expect(email.exists()).toBe(true);
      });

      it('renders password input', () => {
        expect(password.exists()).toBe(true);
      });

      it('password input should shange SignIn state', () => {
        expect(password.exists()).toBe(true);
      });

      it('renders submit button', () => {
        expect(submit.exists()).toBe(true);
      });

      it('should submit form by clicking on submit button', () => {
        email.simulate('change', {target: {value: 'd@d.com'}});
        password.simulate('change', {target: {value: 'Passw0rd'}});
        form.simulate('submit');
        expect(mockSignIn).toBeCalled();
      });
    });

    it('renders password help link', () => {
      const helpLink = wrapper.find('.help_link');
      expect(helpLink.exists()).toBe(true);
    });
  });
});
