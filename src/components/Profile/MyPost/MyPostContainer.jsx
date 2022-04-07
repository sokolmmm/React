import React from "react";
import { addPostCreator } from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";
import { updateNewPostTextCreator } from "./../../../redux/profile-reducer";
import MyPost from "./MyPost";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      let action = updateNewPostTextCreator(text);
      dispatch(action);
    },
    addPost: () => {
      let action = addPostCreator();
      dispatch(action) 
    }     
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost); 

export default MyPostContainer;
