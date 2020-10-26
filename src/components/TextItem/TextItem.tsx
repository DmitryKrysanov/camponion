import React from 'react';
import styles from './TextItem.module.scss';

const TextItem = (props: {title: string; text: string}) => {
  return (
    <div className={styles.text_item}>
      <h5>{props.title}</h5>
      <p>{props.text}</p>
    </div>
  );
};

export default TextItem;
