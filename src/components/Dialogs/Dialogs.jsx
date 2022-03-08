import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Dialogs.module.css";

const DialogItem = (props) => {
  return (
    <div className={s.dialog}>
      <NavLink
        to={`dialog/${props.id}`}
        className={({ isActive }) => `${isActive ? s.active : ""}`}
      >
        {props.name}
      </NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.message}> {props.message} </div>;
};

const Dialogs = () => {
  
  let dialogs = [
    { id: 1, name: "Barsik" },
    { id: 2, name: "Murchik" },
    { id: 3, name: "Murchik" },
    { id: 4, name: "Murchik" },
    { id: 5, name: "Murchik" },
  ];

  let messages = [
    { id: 1, message: "How are you" },
    { id: 2, message: "Hello, my friend" },
    { id: 3, message: "Hello, Yanka" },
    { id: 4, message: "Hello, Misha" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem id={d.id} name={d.name} />
  ));
  let messagesElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
