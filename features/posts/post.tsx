import React from "react";
import Router from "next/router";
import { Post } from "../../services/post/types";

const Post = ({ post }: { post: Post }) => {
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}>
      <h2>{post.title}</h2>
      {post.content}
    </div>
  );
};

export default Post;
