import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [comments, setComments] = useState([]); // note all the comments are inside an array
  //
  const fetchData = async () => {
    const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    // when requesting axios all the response is under data property
    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []); // this empty array tells React to fetchPosts onetime

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });

  return <ul>{renderedComments}</ul>;
};
