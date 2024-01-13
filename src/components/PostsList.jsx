import React from "react";
import Post from "./Post";
import { useContext } from "react";
import { PostList } from "../store/Post-list-store";

const PostsList = () => {
  const { postlist } = useContext(PostList);
  // console.log(postlist, 8);
  return (
    <div>
      {postlist.map((post) => (
        // console.log(post.id)

        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostsList;
