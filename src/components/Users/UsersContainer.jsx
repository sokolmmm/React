import React from "react";
import { connect } from "react-redux";
import {
  setCurentPage,
  requestUsers,
  unfollow,
  follow,
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";
import {
  getCurentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/selectors/users-selector";

class UsersComponent extends React.Component {
  componentDidMount() {
    const { curentPage, pageSize } = this.props;
    this.props.requestUsers(curentPage, pageSize);
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props;
    this.props.setCurentPage(pageNumber);
    this.props.requestUsers(pageNumber, pageSize);
  };

  render() {
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users onPageChanged={this.onPageChanged} {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    curentPage: getCurentPage(state),
    totalUsersCount: getTotalUsersCount(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    setCurentPage,
    requestUsers,
    follow,
    unfollow,
  })
)(UsersComponent);
