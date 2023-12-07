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
      profilePost: true,
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
    {
      profilePost: false,
      userHandle: "@nazzz",
      userName: "Nazanin",
      userProfilePic: Images.profileImages.naz,
      userText: "Meditate for 5 minutes",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@lcivita99",
          commentUserProfilePic: Images.profileImages.luca,
          commentText: "Wow I love reading too!!!!",
        },
      ],
    },
    {
      profilePost: false,
      userHandle: "@ccevgrb",
      userName: "Cecilia",
      userProfilePic: Images.profileImages.cecilia,
      userText: "Take Ringo on a long walk",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@malinac",
          commentUserProfilePic: Images.profileImages.malina,
          commentText: "Wow I love reading too!!!!",
        },
      ],
    },
    {
      profilePost: false,
      userHandle: "@lcivita99",
      userName: "Luca Civita",
      userProfilePic: Images.profileImages.luca,
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
    {
      profilePost: false,
      userHandle: "@malinac",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.malina,
      userText: "See a new movie",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@malinac",
          commentUserProfilePic: Images.profileImages.malina,
          commentText: "Wow I love reading too!!!!",
        },
      ],
    },
    {
      profilePost: false,
      userHandle: "@digomattos",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.digo,
      userText: "Go out to a new Restaurant",
      comments: [
        {
          postIndex: 0,
          commentUserHandle: "@malinac",
          commentUserProfilePic: Images.profileImages.malina,
          commentText: "Wow I love reading too!!!!",
        },
      ],
    },
    {
      profilePost: false,
      userHandle: "@nazzz",
      userName: "Pedro Civita",
      userProfilePic: Images.profileImages.naz,
      userText: "Run 10k",
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
  const addPost = (
    userHandle,
    userName,
    userProfilePic,
    userText,
    profilePost
  ) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        userHandle,
        userName,
        userProfilePic,
        userText,
        comments: [],
        profilePost: profilePost,
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
