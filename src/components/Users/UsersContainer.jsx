// eslint-disable-next-line no-unused-vars
import React from "react";
import { connect } from "react-redux";
import {
  followSuccess,
  setCurentPage,
  unfollowSuccess,
  toggleFollowingProgress,
  getUsers,
  unfollow,
  follow,
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { userAPI } from "../../api/api";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersComponent extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.curentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurentPage(pageNumber);
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          users={this.props.users}
          pageSize={this.props.pageSize}
          curentPage={this.props.curentPage}
          totalUsersCount={this.props.totalUsersCount}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    curentPage: state.usersPage.curentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurentPage,
    getUsers,
    follow,
    unfollow,
  }),
  withAuthRedirect
)(UsersComponent);
