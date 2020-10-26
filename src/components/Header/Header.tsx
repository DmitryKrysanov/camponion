import React from 'react';
import style from './Header.module.scss';
import IsAuthenticated from './IsAuthenticated/IsAuthenticated';
import IsNotAuthenticated from './IsNotAuthenticated/IsNotAuthenticated';

interface Props {
  uid: string | null;
}
const Header = (props: Props) => {
  return (
    <header className={style.header}>
      <h3>CampOnion</h3>
      {props.uid ? <IsAuthenticated /> : <IsNotAuthenticated />}
    </header>
  );
};

export default Header;
