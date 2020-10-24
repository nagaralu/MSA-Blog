import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({}); // note all the posts are inside an object not array
  //
  const fetchPosts = async () => {
    const res = await axios.get('http://localhost:4000/posts');
    // when requesting axios all the response is under data property
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []); // this empty array tells React to fetchPosts onetime

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div className="card" style={{ width: '30%', marginBottom: '20px' }} key={post.id}>
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList postId={post.id} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{renderedPosts}</div>;
};