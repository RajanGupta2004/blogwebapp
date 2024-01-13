import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (postitems) => postitems.id !== action.payload.postid
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }

  return newPostList;
};

const Postliststore = ({ children }) => {
  const DEFAULT_POST = [
    {
      userID: "hbkhj",
      id: "1",
      title: "Going to mumbai",
      body: "Bhaut maja aa raha hai bahi ",
      reactions: "3",
      tags: ["enjoy", "mast"],
    },
    {
      userID: "ragah",
      id: "2",
      title: "Going to Lucknow",
      body: "Bhaut maja aa raha hai bahi",
      reactions: "23",
      tags: ["Luckonw", "enjoy"],
    },
  ];
  const [postlist, dispatchPostList] = useReducer(postReducer, DEFAULT_POST);

  const addPost = ({ userID, title, content, reaction, tags }) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        userID: userID,
        id: Date.now(),
        title: title,
        body: content,
        reactions: reaction,
        tags: tags,
      },
    });
  };

  const deletePost = (postid) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postid: postid,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postlist: postlist, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

export default Postliststore;
