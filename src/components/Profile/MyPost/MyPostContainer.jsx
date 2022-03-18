import React from "react";
import { addPostCreator } from "../../../redux/profile-reducer";
import { updateNewPostTextCreator } from "./../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {
  let state = props.store.getState();

  let addPost = () => {
    let action = addPostCreator();
    props.store.dispatch(action);
  };

  let updateNewPostText = (text) => {
    let action = updateNewPostTextCreator(text);
    props.store.dispatch(action);
  };

  return (
    <MyPost
      updateNewPostText={updateNewPostText}
      addPost={addPost}
      posts={state.profilePage.posts}
      newPostText = {state.profilePage.newPostText}
    />
  );
};

export default MyPostContainer;
