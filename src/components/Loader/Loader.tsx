import React from 'react';
import styles from './Loader.module.scss';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = () => {
  return (
    <div className={styles.loader}>
      <CircularProgress color="secondary" />
    </div>
  );
};

export default Loader;
