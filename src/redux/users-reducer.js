import { userAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  curentPage: 10,
  totalUsersCount: 0,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userID) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURENT_PAGE:
      return { ...state, curentPage: action.curentPage };
    case SET_TOTAL_USER_COUNT:
      return { ...state, totalUsersCount: action.totalUsersCount };
    case TOGGLE_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.followingInProgress
          ? [...state.followingInProgress, action.userID]
          : state.followingInProgress.filter((id) => id !== action.userID),
      };
    default:
      return state;
  }
};

export const followSuccess = (userID) => ({
  type: FOLLOW,
  userID,
});
export const unfollowSuccess = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsers = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurentPage = (curentPage) => ({
  type: SET_CURENT_PAGE,
  curentPage,
});
export const setTotalUserCount = (totalUsersCount) => ({
  type: SET_TOTAL_USER_COUNT,
  totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingProgress = (followingInProgress, userID) => ({
  type: TOGGLE_FOLLOWING_PROGRESS,
  followingInProgress,
  userID,
});

export const getUsers = (curentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    userAPI.getUsers(curentPage, pageSize).then((data) => {
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const unfollow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    userAPI.unfollow(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export const follow = (userID) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userID));
    userAPI.follow(userID).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userID));
      }
      dispatch(toggleFollowingProgress(false, userID));
    });
  };
};

export default usersReducer;
