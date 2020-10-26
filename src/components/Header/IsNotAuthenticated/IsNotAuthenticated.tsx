import React from 'react';
import style from './IsNotAuthenticated.module.scss';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';

// interface Props {
//   match: any;
//   history: any;
// }

const IsNotAuthenticated = (props: any) => {
  const onSignInHandle = () => {
    props.history.push('/auth/signin');
  };

  const onSignUpHandle = () => {
    props.history.push('/auth/signup');
  };

  return (
    <ul className={style.header_actions}>
      <li>
        <Button variant="text" color="secondary" onClick={onSignInHandle}>
          Sign In
        </Button>
      </li>
      <li>
        <Button variant="contained" color="secondary" onClick={onSignUpHandle}>
          Sign Up
        </Button>
      </li>
    </ul>
  );
};

export default withRouter(IsNotAuthenticated);
