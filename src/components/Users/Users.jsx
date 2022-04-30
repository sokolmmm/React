import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/UserImage_small.png";
import { NavLink } from "react-router-dom";
import * as axios from "axios";
import { userAPI } from "../../api/api";

const Users = (props) => {
  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : userPhoto}
                  alt="user_image"
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.unfollow(u.id)}}
                  > unfollow </button>) : (
                <button disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {props.follow(u.id)}} 
                  > follow </button> 
              )}
            </div>
          </div>
          <div>
            <div>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
        </div>
      ))}
      <div>
        {pages.map((p) => {
          return (
            <button className={props.curentPage === p && styles.selectedPage}
              onClick={() => {props.onPageChanged(p)}}> 
                {p}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
