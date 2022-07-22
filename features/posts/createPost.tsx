import React, { useState } from "react";
import Router from "next/router";
import { createPost } from "../../services/post/api";

const Draft = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content };
      const result = await createPost(body);
      console.log(result);
      await Router.push("/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={submitData}>
        <h1>New Draft Post</h1>
        <input
          autoFocus
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
        <textarea
          cols={50}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Content"
          rows={8}
          value={content}
        />
        <input disabled={!content || !title} type="submit" value="Create" />
        <a className="back" href="#" onClick={() => Router.push("/")}>
          or Cancel
        </a>
      </form>
    </div>
  );
};

export default Draft;
