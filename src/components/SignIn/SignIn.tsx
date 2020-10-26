import React, {Component} from 'react';
import styles from './SignIn.module.scss';
import {NavLink} from 'react-router-dom';

export interface SignInForm {
  email: string;
  password: string;
}

interface Props {
  signIn: (user: SignInForm) => void;
}

class SignIn extends Component<Props> {
  state = {
    email: '',
    password: '',
  };

  public emailChange = (event: {target: {value: any}}) => {
    this.setState({
      email: event.target.value,
    });
  };

  public passwordChange = (event: {target: {value: any}}) => {
    this.setState({
      password: event.target.value,
    });
  };

  public submit = () => {
    this.props.signIn(this.state);
  };
  render() {
    return (
      <div className={styles.signin}>
        <h1>Sign In</h1>
        <form onSubmit={this.submit}>
          <input
            className={styles.input}
            type="email"
            value=""
            onChange={this.emailChange}
          />
          <input
            className={styles.input}
            type="password"
            value=""
            onChange={this.passwordChange}
          />
          <div className={styles.help_link}>
            <NavLink to="/auth/forgot_password">Need help?</NavLink>
          </div>
          <button onChange={this.submit}>Sign In</button>
        </form>
      </div>
    );
  }
}

export default SignIn;
