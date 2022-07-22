import { baseUrl } from "../../api";
import { ApiMethods } from "../../types";
import { Post } from "../types";

export const createPost = async ({
  title,
  content,
}: {
  title: string;
  content: string;
}): Promise<void> => {
  const result = await fetch(`${baseUrl}post`, {
    method: ApiMethods.POST,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content }),
  });
  console.log("createPost result", result);
};

export const updatePostPublished = async (id: number): Promise<void> => {
  const result = await fetch(`${baseUrl}publish/${id}`, {
    method: ApiMethods.PUT,
  });
  console.log("publishPost result", result);
};

export const deletePost = async (id: number): Promise<void> => {
  const result = await fetch(`${baseUrl}post/${id}`, {
    method: ApiMethods.DELETE,
  });
  console.log("deletePost result", result);
};

export const getPostById = async (id: number): Promise<Post> => {
  const result = await fetch(`${baseUrl}post/${id}`, {
    method: ApiMethods.GET,
  });
  console.log("getPostById result", result);
  return result.json();
};

export const getAllPublishedPosts = async (): Promise<Post[]> => {
  const result = await fetch(`${baseUrl}publishedPosts`, {
    method: ApiMethods.GET,
  });
  console.log("getAllPublishedPosts result", result);
  return result.json();
};

export const getAllDraftPosts = async (): Promise<Post[]> => {
  const result = await fetch(`${baseUrl}draftPosts`, {
    method: ApiMethods.GET,
  });
  console.log("getAllDraftPosts result", result);
  return result.json();
};
