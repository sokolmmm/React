import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";
import navbarImage from "../../assets/images/navbar_image.png";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.userBlock}>
        <img src={navbarImage} alt="navbar_user_image" />
        <h3>Misha Sokol</h3>
      </div>

      <div className={style.linkBlock}>
        <div className={style.item}>
          <NavLink
            to="/profile"
            className={({ isActive }) => `${isActive ? style.active : ""}`}
          >
            <i class="fa-solid fa-user"></i>
            <span>My Profile</span>
          </NavLink>
        </div>
        <div className={style.item}>
          <NavLink
            to="/dialogs"
            className={({ isActive }) => `${isActive ? style.active : ""}`}
          >
            <i class="fa-solid fa-paper-plane"></i>
            <span>Messages</span>
          </NavLink>
          <i class="fa-duotone fa-lamp-floor"></i>
        </div>
        <div className={style.item}>
          <NavLink
            to="users"
            className={({ isActive }) => `${isActive ? style.active : ""}`}
          >
            <i class="fa-solid fa-user-group"></i>
            <span>Friend List</span>
          </NavLink>
        </div>
        <div className={style.item}>
          <a className={({ isActive }) => `${isActive ? style.active : ""}`}>
            <i className="fa-solid fa-newspaper"></i>
            <span>News</span>
          </a>
        </div>
        <div className={style.item}>
          <a>
            <i class="fa-solid fa-circle-check"></i>
            <span>Todo</span>
          </a>
        </div>
        <div className={style.item}>
          <a>
            <i class="fa-solid fa-gear"></i>
            <span>Settings</span>
          </a>
        </div>
      </div>

      <div className={style.logoutBlock}>
        <div className={style.item}>
          <NavLink to="/" onClick={props.logout}>
            <i class="fa-solid fa-right-from-bracket"></i>
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
