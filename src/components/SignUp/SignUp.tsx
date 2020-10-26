import React, {Component} from 'react';
import styles from './SignUp.module.scss';
import {Form, Field} from 'react-final-form';
import TextField from '@material-ui/core/TextField';
import {Button, Checkbox} from '@material-ui/core';
import VisibilityTwoToneIcon from '@material-ui/icons/VisibilityTwoTone';
import VisibilityOffTwoToneIcon from '@material-ui/icons/VisibilityOffTwoTone';
import {
  composeValidators,
  email,
  maxLengthText,
  minLengthText,
  password,
  passwordMinLength,
  required,
} from '../../utils/validation.utils';

export interface SignUpForm {
  firstName: string;
  email: string;
  password: string;
}

interface Props {
  signUp: (user: SignUpForm) => void;
}

class SignUp extends Component<Props> {
  public state = {
    check: false,
    passwordShown: false,
  };

  private showPassword = () => {
    this.setState({
      passwordShown: !this.state.passwordShown,
    });
  };

  private handleCheck = () => {
    this.setState({
      check: !this.state.check,
    });
  };

  private handleFormSubmit = (data: SignUpForm) => {
    this.props.signUp(data);
  };

  render() {
    return (
      <div className={styles.signup}>
        <h1>Sign Up</h1>
        <Form
          onSubmit={this.handleFormSubmit}
          render={({handleSubmit, submitting}) => (
            <form onSubmit={handleSubmit} noValidate>
              <Field
                name="firstName"
                validate={composeValidators(
                  required,
                  minLengthText,
                  maxLengthText,
                )}
              >
                {({input, meta}) => (
                  <div className={styles.input}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="filled"
                      type="text"
                      {...input}
                      error={meta.error && meta.touched}
                      helperText={
                        meta.error && meta.touched ? meta.error : null
                      }
                    />
                  </div>
                )}
              </Field>
              <Field name="email" validate={composeValidators(required, email)}>
                {({input, meta}) => (
                  <div className={styles.input}>
                    <TextField
                      fullWidth
                      label="E-mail"
                      variant="filled"
                      type="email"
                      {...input}
                      error={meta.error && meta.touched}
                      helperText={
                        meta.error && meta.touched ? meta.error : null
                      }
                    />
                  </div>
                )}
              </Field>
              <Field
                name="password"
                validate={composeValidators(
                  required,
                  password,
                  passwordMinLength,
                )}
              >
                {({input, meta}) => (
                  <div className={`${styles.input} ${styles.input__password}`}>
                    <button onClick={this.showPassword}>
                      {this.state.passwordShown ? (
                        <VisibilityOffTwoToneIcon color="primary" />
                      ) : (
                        <VisibilityTwoToneIcon color="primary" />
                      )}
                    </button>
                    <TextField
                      fullWidth
                      label="Password"
                      variant="filled"
                      type={this.state.passwordShown ? 'text' : 'password'}
                      {...input}
                      error={meta.error && meta.touched}
                      helperText={
                        meta.error && meta.touched ? meta.error : null
                      }
                    />
                  </div>
                )}
              </Field>
              <div className={styles.terms}>
                <button id="checkbox" onClick={this.handleCheck}>
                  {!this.state.check ? 'Unchecked' : 'Checked'}
                </button>
                <h4>
                  I agree to the <a href="#">Terms and Conditions</a>
                </h4>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                disabled={submitting || !this.state.check}
              >
                Sign Up
              </Button>
            </form>
          )}
        />
      </div>
    );
  }
}

export default SignUp;
