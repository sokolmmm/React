let initialState = {
  users: [
    {id: 1, followed: true, fullName: "Misha", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    {id: 2, followed: false, fullName: "Yanka", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    {id: 3, followed: true, fullName: "Vasyl", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    {id: 4, followed: false, fullName: "Stepan", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    {id: 5, followed: true, fullName: "Yura", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    {id: 6, followed: false, fullName: "Yanka", status: 'good', location: {city:'Kiev', country: 'Ukraine'}},
    ],
  newPostText: "HI",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userID) {
            return {...u, followed: true}
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userID) {
            return {...u, followed: false}
          }
          return u;
        })
      };
    default:
      return state;
  };
};

const followAC = (userID) => ({
  type: FOLLOW, userID
});
const unfollowAC = (userID) => ({
  type: UNFOLLOW, userID
});
const setUsersAC = (users) => ({
  type: SET_USERS, users
});





const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = 'SET_USERS'; 