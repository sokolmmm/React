import React from 'react';
import { NavLink } from 'react-router-dom';
import s from'./Navbar.module.css';

const Navbar = () => {
  return (
    <nav className = {s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={({ isActive }) =>`${ isActive ? s.active : '' }`}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className={({ isActive }) =>`${ isActive ? s.active : '' }`} >Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/users'>Find user</NavLink>
      </div>
      <div className={s.item}>
        <a>News</a>
      </div>
      <div className={s.item}>
        <a>Music</a>
      </div>
      <div className={s.item}>
        <a>Settings</a>
      </div>
    </nav>
  );
};

export default Navbar;
