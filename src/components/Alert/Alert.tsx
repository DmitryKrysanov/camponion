import React from 'react';
import styles from './Alert.module.scss';

interface Props {
  message: string;
  type: string;
}

const Alert = (props: Props) => {
  return (
    <div
      className={`alert ${
        props.type === 'error'
          ? 'alert__error'
          : props.type === 'success'
          ? 'alert__success'
          : undefined
      }`}
    >
      <h4>{props.message}</h4>
    </div>
  );
};

export default Alert;
