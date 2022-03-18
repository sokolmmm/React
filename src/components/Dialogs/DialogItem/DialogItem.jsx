import React from "react";
import { NavLink } from "react-router-dom";
import s from "./../Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <img src="https://themified.com/friend-finder/images/users/user-10.jpg"></img>
      <NavLink to={`dialog/${props.id}`} className={({ isActive }) => `${isActive ? s.active : ""}`}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default DialogItem;
