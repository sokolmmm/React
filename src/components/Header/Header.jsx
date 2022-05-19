import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import headerNavbarLogo from "../../assets/images/header_logo.png";
import headerImage from "../../assets/images/navbar_image.png";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={style.headerNavbar}>
        <img
          className={style.headerNavbarLogo}
          src={headerNavbarLogo}
          alt="header_navbar_logo"
        ></img>
        <div className={style.switchMode}>
          <i class="fa-regular fa-lightbulb"></i>
        </div>
      </div>
      <div className={style.headerItems}>
        <div>
          <i class="fa-regular fa-bell"></i>
        </div>
        <div>
          <i class="fa-regular fa-comment-dots"></i>
        </div>
        <div>
          {/* {props.isAuth ? props.login : <NavLink to="/login">login</NavLink>} */}
          <img src={headerImage} alt="" />
        </div>
      </div>
    </header>
  );
};
export default Header;
