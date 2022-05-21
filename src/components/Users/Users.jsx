import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";
import styles from './Users.module.css';

const Users = (props) => {
  return (
    <div className={styles.userContainer}>
      <div>
        {props.users.map((u) => (
          <User
            key={u.id}
            user={u}
            followingInProgress={props.followingInProgress}
            unfollow={props.unfollow}
            follow={props.follow}
          />
        ))}
      </div>
      <Paginator
        totalItemsCount={props.totalUsersCount}
        pageSize={props.pageSize}
        curentPage={props.curentPage}
        onPageChanged={props.onPageChanged}
      />
    </div>
  );
};

export default Users;
