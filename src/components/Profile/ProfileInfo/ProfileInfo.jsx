import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
  return (
    <div className={s.profileInfo}>
      <div>
        <img className={s.profileInfoLogo} src="https://inlnk.ru/go9Qeo"/>
      </div>
      <div className={s.descriptionBlock}> Ava + description </div>
    </div>
  );
};

export default ProfileInfo;
