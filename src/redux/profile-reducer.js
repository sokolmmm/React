import { profileAPI } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you', likesCount: 10 },
    { id: 2, message: 'Hi, how are you', likesCount: 30 },
    { id: 3, message: 'Hi, how are you', likesCount: 20 },
  ],
  newPostText: 'HI',
  profile: null,
  status: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
  case ADD_POST: 
    let newText = state.newPostText;
    return {
      ...state,
      posts: [...state.posts, { id: 5, message: newText, likesCount: 15 }],
      newPostText: '',
    };
  case UPDATE_NEW_POST_TEXT:
    return {
      ...state,
      newPostText: action.newText,
    };
  case SET_USER_PROFILE:
    return { ...state, profile: action.profile };
  case SET_USER_STATUS:
    return {...state, status: action.status};
  default:
    return state;
  }
};

export const addPostCreator = () => ({
  type: ADD_POST,
});
export const updateNewPostTextCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatus = (status) => ({
  type: SET_USER_STATUS, status
});

export const getUserProfile = (profileID) => {
  return (dispatch) => {
    profileAPI.getProfile(profileID)
      .then((response) => {
        dispatch(setUserProfile(response.data));
      });
    
  }
};

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId)
      .then(responce => {
        dispatch(setUserStatus(responce.data))
      });
  };
}
export const updateStatus = (status) => {
  return (dispatch) => {
  profileAPI.updateStatus(status)
    .then(responce => {
      if (responce.data.resultCode === 0) {
        dispatch(setUserStatus(status))
      }
    })
  };
}

export default profileReducer;
