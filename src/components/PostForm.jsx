import React, { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const navigate = useNavigate();
  const userIDElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionElement = useRef();
  const tagElement = useRef();
  const { addPost } = useContext(PostList);

  const handleform = (event) => {
    event.preventDefault();
    const userID = userIDElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionElement.current.value;
    let tags = tagElement.current.value.split(" ");

    addPost({ userID, title, content, reaction, tags });
    userIDElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionElement.current.value = "";
    tagElement.current.value = "";
    navigate("/");
  };
  return (
    <form className="m-4 p-4" onSubmit={handleform}>
      <div className="mb-3">
        <label htmlFor="UserID" className="form-label">
          User ID
        </label>
        <input
          type="text"
          ref={userIDElement}
          className="form-control"
          id="UserID"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
          type="text"
          ref={titleElement}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">
          Content
        </label>
        <textarea
          type="text"
          ref={contentElement}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Reactions
        </label>
        <input
          type="text"
          ref={reactionElement}
          className="form-control"
          id="title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tagElement}
          className="form-control"
          id="tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default PostForm;
