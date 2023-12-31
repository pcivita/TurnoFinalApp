import React, { createContext, useState } from "react";
import Images from "../assets/Themes/Images";

// Create the context
export const PostsContext = createContext();

// Create a provider component
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      profilePost: true,
      userHandle: "@pcivita",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.pedro,
      userText: "Run Around Lake Lag",
      comments: [],
    },
    {
      profilePost: true,
      userHandle: "@pcivita",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.pedro,
      userText: "Read my new book!!!!",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@nazzz",
      userName: "Nazanin",
      userProfilePic: Images.profileImages.naz,
      userText: "Meditate for 5 minutes",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@ccevgrb",
      userName: "Cecilia",
      userProfilePic: Images.profileImages.cecilia,
      userText: "Take Ringo on a long walk",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@lcivita99",
      userName: "Luca Civita",
      userProfilePic: Images.profileImages.luca,
      userText: "Read my new book!!!!",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@malinac",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.malina,
      userText: "See a new movie",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@digomattos",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.digo,
      userText: "Go out to a new Restaurant",
      comments: [],
    },
    {
      profilePost: false,
      userHandle: "@nazzz",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.naz,
      userText: "Run 10k",
      comments: [],
    },
  ]);

  // Function to add a new post
  const addPost = (
    userHandle,
    userName,
    userProfilePic,
    userText,
    profilePost
  ) => {
    setPosts((prevPosts) => [
      {
        userHandle: userHandle,
        userName: userName,
        userProfilePic: userProfilePic,
        userText: userText,
        comments: [],
        profilePost: profilePost,
      },
      ...prevPosts,
    ]);
  };

  // postIndex: 0,
  // commentUserHandle: "@malinac",
  // commentUserProfilePic: Images.profileImages.malina,
  // commentText: "Wow I love reading too!!!!",

  // Function to add a comment to a post
  const addCommentToPost = (
    postIndex,
    commentUserHandle,
    commentUserProfilePic,
    commentText
  ) => {
    setPosts((prevPosts) => {
      const updatedPosts = [...prevPosts];
      const comment = {
        commentUserHandle: commentUserHandle,
        commentUserProfilePic: commentUserProfilePic,
        commentText: commentText,
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
