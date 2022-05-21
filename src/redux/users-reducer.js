import { userAPI } from "../api/api";
import { updateObjInArray } from "../utils/validators/object-helpers";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURENT_PAGE = "SET_CURENT_PAGE";
const SET_TOTAL_USER_COUNT = "SET_TOTAL_USER_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 5,
  curentPage: 1,
  totalUsersCount: 0,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, "id", action.userID, {
          followed: true,
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjInArray(state.users, "id", action.userID, {
          followed: false,
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

export const requestUsers = (curentPage, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  const response = await userAPI.getUsers(curentPage, pageSize);
  dispatch(setUsers(response.items));
  dispatch(setTotalUserCount(response.totalCount));
  dispatch(toggleIsFetching(false));
};

const followUnfollowFlow = async (
  dispatch,
  userID,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingProgress(true, userID));
  const response = await apiMethod(userID);

  if (response.resultCode === 0) {
    dispatch(actionCreator(userID));
  }

  dispatch(toggleFollowingProgress(false, userID));
};

export const unfollow = (userID) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userID,
    userAPI.unfollow.bind(userAPI),
    unfollowSuccess
  );
};

export const follow = (userID) => async (dispatch) => {
  followUnfollowFlow(
    dispatch,
    userID,
    userAPI.follow.bind(userAPI),
    followSuccess
  );
};

export default usersReducer;
