import React, { useEffect, useState } from "react";

const ProfileStatusWithHooks = (props) => {
  let [editMod, setEditMod] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activedEditMode = () => {
    setEditMod(true);
  };
  const deactivedEditMode = () => {
    setEditMod(false);
    props.updateStatus(status);
  };
  const onStatusChande = (e) => {
      setStatus(e.currentTarget.value);
  }

  useEffect (() => {
      setStatus(props.status)}, [props.status]); 


  return (
    <div>
      {editMod ? (
        <div>
          <input value={status} autoFocus={true} onChange={onStatusChande} onBlur={deactivedEditMode} type="text"  />
        </div>
      ) : (
        <div>
          <span onDoubleClick={activedEditMode}>{props.status}</span>
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
