const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you", likesCount: 10},
    {id: 2, message: "Hi, how are you", likesCount: 30},
    {id: 3, message: "Hi, how are you", likesCount: 20},
  ],
  newPostText: "HI",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newText = state.newPostText;
      return {
        ...state,
        posts: [...state.posts, {id: 5, message: newText, likesCount: 15}],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
    }
  };
export const addPostCreator = () => ({
    type: ADD_POST
});
export const updateNewPostTextCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});

export default profileReducer;