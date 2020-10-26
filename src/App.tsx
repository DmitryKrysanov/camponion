import React from 'react';
import styles from './App.module.scss';
import Header from './components/Header/Header';
import ContentWrapper from './components/ContentWrapper/ContentWrapper';
import {connect} from 'react-redux';

interface IAuth {
  uid: string;
  token: string;
  error: string;
}

interface ConnectedProps {
  auth: IAuth;
}

const App = (props: ConnectedProps) => {
  return (
    <div className={styles.app}>
      <Header uid={props.auth.uid} />
      <div className={styles.content_wrapper}>
        <ContentWrapper uid={props.auth.uid} />
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    auth: state.authReducer,
  };
};

export default connect(mapStateToProps)(App);
