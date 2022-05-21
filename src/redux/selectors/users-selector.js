import { createSelector } from "reselect";

export const getUsers = (state) => {
  return state.usersPage.users;
};

export const getPageSize = (state) => {
  return state.usersPage.pageSize
}

export const getCurentPage = (state) => {
  return state.usersPage.curentPage
}

export const getTotalUsersCount = (state) => {
  return state.usersPage.totalUsersCount
}

export const getIsFetching = (state) => {
  return state.usersPage.isFetching
}

export const getFollowingInProgress = (state) => {
  return state.usersPage.followingInProgress
}
