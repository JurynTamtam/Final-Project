// src/components/Post.js
import React from 'react';
import './Post.css';

const Post = ({ title, body,text,text1,text2, image }) => {
  return (
    <div className="post-card">
      <img className="post-image" src={image} alt={title} />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-body">{body}</p>
        <p className="post-body">{text}</p>
        <p className="post-body">{text1}</p>
        <p className="post-body">{text2}</p>
      </div>
    </div>
  );
};

export default Post;
