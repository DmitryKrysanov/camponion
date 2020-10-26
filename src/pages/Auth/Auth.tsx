import React from 'react';
import {Route, Switch} from 'react-router-dom';
import SignIn, {SignInForm} from '../../components/SignIn/SignIn';
import SignUp, {SignUpForm} from '../../components/SignUp/SignUp';
import styles from './Auth.module.scss';
import background from './../../assets/images/auth_background.png';
import Loader from '../../components/Loader/Loader';
import {connect} from 'react-redux';
import Alert from '../../components/Alert/Alert';
import {signIn, signUp} from '../../redux/actions/authActions/authActions';

interface Props {
  isLoad: boolean;
  alert: string;
}

type ComponentProps = Props & ReturnType<typeof mapDispatchToProps>;

const Auth = (props: ComponentProps) => {
  return (
    <div className={styles.auth}>
      {props.alert ? <Alert message={props.alert} type="error" /> : null}
      {props.isLoad ? (
        <div className={styles.loader}>
          <Loader />
        </div>
      ) : null}
      <div className={styles.auth_img}>
        <img src={background} alt="CampOnion"></img>
      </div>
      <div className={styles.auth_form}>
        <Switch>
          <Route
            path="/auth/signin"
            component={() => <SignIn signIn={props.signIn} />}
          />
          <Route
            path="/auth/signup"
            component={() => <SignUp signUp={props.signUp} />}
          />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    isLoad: state.loaderReducer.isLoad,
    alert: state.alertReducer.alert,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (user: SignInForm) => {
    return dispatch(signIn(user));
  },
  signUp: (user: SignUpForm) => {
    return dispatch(signUp(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
