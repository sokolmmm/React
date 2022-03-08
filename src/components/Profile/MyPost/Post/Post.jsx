import React from "react";
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://inlnk.ru/571P0v" />
      { props.message}
      <div>
        <span>Like</span> {props.likesCount}

      </div>
    </div>
  );
}

export default Post;