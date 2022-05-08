import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div className={s.profileInfo}>
        <div className={s.descriptionBlock}>
          <img className={s.profileInfoLogo} src={props.profile.photos.large} />
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>

      </div>
    );
  }
};

export default ProfileInfo;
