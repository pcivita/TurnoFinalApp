import React, { createContext, useState } from "react";
import Images from "../assets/Themes/Images";

// Create the context
export const PostsContext = createContext();

// Create a provider component
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      userHandle: "@pcivita",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.pedro,
      userText: "Run Around Lake Lag",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@malinac",
          commentUserProfilePic: Images.profileImages.malina,
          commentText: "This is so Cool",
        },
      ],
    },
    {
      userHandle: "@pcivita",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.pedro,
      userText: "Read my new book!!!!",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@malinac",
          commentUserProfilePic: Images.profileImages.malina,
          commentText: "Wow I love reading too!!!!",
        },
      ],
    },
  ]);

  // Function to add a new post
  const addPost = (userHandle, userName, userProfilePic, userText) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        userHandle,
        userName,
        userProfilePic,
        userText,
        comments: [],
      },
    ]);
  };

  // Function to add a comment to a post
  const addCommentToPost = (
    postIndex,
    commentUserHandle,
    commentUserName,
    commentUserProfilePic,
    commentText
  ) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      const comment = {
        commentUserHandle: commentUserHandle,
        commentUserProfilePic: commentUserProfilePic,
        commentText: commentText,
        postIndex: 0,
      };
      if (updatedPosts[postIndex]) {
        updatedPosts[postIndex].comments.push(comment);
      }
      return updatedPosts;
    });
  };

  return (
    <PostsContext.Provider value={{ posts, addPost, addCommentToPost }}>
      {children}
    </PostsContext.Provider>
  );
};

export default PostsProvider;
