import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profileInfo}>
        <div>
          <img className={s.profileInfoLogo} src={props.profile.photos.large} />
        </div>
        <div className={s.descriptionBlock}> Ava + description </div>
      </div>
    );
  }
};

export default ProfileInfo;
