import React from 'react';
import styles from './Search.module.scss';
import TextField from '@material-ui/core/TextField';

const Search = () => {
  return (
    <div className={styles.search}>
      <TextField
        fullWidth
        size="small"
        placeholder="Search"
        variant="outlined"
        type="text"
      />
    </div>
  );
};

export default Search;
