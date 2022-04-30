import * as axios from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "1477801a-bb3f-48d9-affa-db0a962c9387",
  },
});

export const userAPI = {
  getUsers(curentPage = 1, pageSize = 3) {
    return instance
      .get(`users?page=${curentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(userID) {
    return instance
      .delete(`follow/${userID}`)
      .then((response) => response.data)
  },
  follow(userID) {
    return instance
      .post(`follow/${userID}`)
      .then ((response) => response.data)
  },
};

export const profileAPI = {
  getProfile(profileID) {
    return instance
      .get(`profile/${profileID}`)
  },
};

export const authAPI = {
  authMe() {
    return instance
    .get(`auth/me`)
  },
};