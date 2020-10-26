import React from 'react';
import {Redirect, Route} from 'react-router-dom';

interface Props {
  path: string;
  isAuth: boolean;
  redirect: string;
  children: any;
}

const ProtectedRoute = (props: Props) => {
  return (
    <Route
      path={props.path}
      render={() =>
        props.isAuth ? (
          props.children
        ) : (
          <Redirect to={{pathname: props.redirect}} />
        )
      }
    />
  );
};

export default ProtectedRoute;
