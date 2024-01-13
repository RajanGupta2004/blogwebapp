import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { PostList } from "../store/Post-list-store";

const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card m-3 p-3" style={{ width: "30rem" }}>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        <BsFillTrashFill onClick={() => deletePost(post.id)} />
        <span className="visually-hidden">unread messages</span>
      </span>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
      </div>
      <p>
        {post.tags.map((tag, i) => (
          <span key={i} className="badge text-bg-secondary m-2">
            {tag}
          </span>
        ))}
      </p>
      <div className="alert alert-light" role="alert">
        {post.reactions}
      </div>
    </div>
  );
};

export default Post;
