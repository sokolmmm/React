import React from "react";
import s from "./MyPost.module.css";
import AddNewPostForm from "./AddNewPostForm/AddNewPostForm";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  console.log('mypost')
  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <AddNewPostForm addPost={props.addPost} />
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPost;
