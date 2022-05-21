import { authAPI } from "../api/api";

const SET_USER_DATA = "auth/SET_USER_DATA";
const SET_RESPONCE_ERROR = "auth/RESPONCE_ERROR";

const initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  responceError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, ...action.payload };
    case SET_RESPONCE_ERROR:
      return { ...state, responceError: action.responceError };
    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, email, login, isAuth },
});
const setResponceError = (responceError) => ({
  type: SET_RESPONCE_ERROR,
  responceError,
});

export const getAuthUserData = () => async (dispatch) => {
  const response = await authAPI.authMe();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setUserData(id, email, login, true));
  }
};

export const login = (email, password, rememberMe) => async (dispatch) => {
  const response = await authAPI.login(email, password, rememberMe);
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData());
  } else {
    dispatch(setResponceError(response.data.messages[0]));
  }
};

export const logout = () => (dispatch) => {
  authAPI.logut().then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
};

export default authReducer;
