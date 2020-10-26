import React from 'react';
import style from './ContentWrapper.module.scss';
import {Switch, Redirect} from 'react-router-dom';
import Events from '../../pages/Events/Events';
import Auth from '../../pages/Auth/Auth';
import ProtectedRoute from '../../hoc/ProptectedRoute.hoc';

interface Props {
  uid: string | null;
}

const ContentWrapper = (props: Props) => {
  return (
    <div className={style.content_wrapper}>
      <Switch>
        <ProtectedRoute
          path="/events"
          redirect="/auth/signin"
          isAuth={Boolean(props.uid)}
        >
          <Events />
        </ProtectedRoute>
        <ProtectedRoute
          path="/auth/:method"
          redirect="/events"
          isAuth={!Boolean(props.uid)}
        >
          <Auth />
        </ProtectedRoute>
        <Redirect to="/events" />
      </Switch>
    </div>
  );
};

export default ContentWrapper;
