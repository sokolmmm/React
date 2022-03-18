import React from "react";
import { addPostCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";
import { updateNewPostTextCreator } from "./../../../redux/profile-reducer";
import MyPost from "./MyPost";

const MyPostContainer = (props) => {

  return (
    <StoreContext.Consumer> 
    {store => {
      let state = store.getState();
      
      let addPost = () => {
        let action = addPostCreator();
        store.dispatch(action);
      };

      let updateNewPostText = (text) => {
        let action = updateNewPostTextCreator(text);
        store.dispatch(action);
      };
      return (
      <MyPost
        updateNewPostText={updateNewPostText}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText = {state.profilePage.newPostText}/>
      )
    }
    }
    </StoreContext.Consumer>
  );
};

export default MyPostContainer;
