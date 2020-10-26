import React from 'react';
import style from './IsAuthenticated.module.scss';
import Button from '@material-ui/core/Button';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../../redux/actions/authActions/authActions';

const IsAuthenticated = (props: any) => {
  const onSignOutHandle = () => {
    props.signOut();
  };

  return (
    <ul className={style.header_actions}>
      <li>
        <Button variant="text" color="secondary" onClick={onSignOutHandle}>
          Sign Out
        </Button>
      </li>
    </ul>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => {
    return dispatch(signOut());
  },
});

const IsAuthenticatedWithRouter = withRouter(IsAuthenticated);
export default connect(null, mapDispatchToProps)(IsAuthenticatedWithRouter);
