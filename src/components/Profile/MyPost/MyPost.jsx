import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {

  let posts = [
    { id: 1, message: "Hi, how are you", likesCount: 10 },
    { id: 2, message: "Hi, how are you", likesCount: 30 },
    { id: 3, message: "Hi, how are you", likesCount: 20 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

  return (
    <div className={s.postsBlock}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button> Click on me </button>
        </div>
      </div>
      <div className={s.posts}> {postsElements} </div>
    </div>
  );
};

export default MyPost;
