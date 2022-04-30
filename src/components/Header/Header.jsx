import React from 'react';
import { NavLink } from 'react-router-dom';
import  style from './Header.module.css';

const Header = (props) => {
  return (
    <header className = {style.header}>
      <img src='https://themified.com/friend-finder/images/logo.png' alt = "header_logo"></img>
      <div className={style.loginBlock}>
        {props.isAuth? props.login : <NavLink to="/login">login</NavLink>}
      </div>
    </header>    
  );
};
export default Header;
