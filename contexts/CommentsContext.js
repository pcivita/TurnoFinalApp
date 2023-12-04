import React, { createContext, useState } from "react";

// Create the context
export const CommentsContext = createContext();

// Create a provider component
export const CommentsProvider = ({ postId, children }) => {
  const [comments, setComments] = useState({
    1: ['Comment 1 for Post 1', 'Comment2', 'Comment3', 'Comment4', 'Comment5', 'Comment6'],
    2: ['Comment 1 for Post 2', 'Comment 2 for Post 2'],
  });

  const addComment = (postId, comment) => {
    setCommentsByPostId((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), comment],
    }));
  };

  const getComments = (postId) => {
    return comments[postId] || [];
  };

  return (
    <CommentsContext.Provider value={{ comments, addComment, getComments }}>
      {children}
    </CommentsContext.Provider>
  );
};

export default CommentsProvider;
