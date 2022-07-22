import prisma from "../../prisma";

export const updatePostPublished = async (id: number) => {
  const result = await prisma.post.update({
    where: { id },
    data: { published: true },
  });
  return result;
};

export const deletePost = async (id: number) => {
  const result = await prisma.post.delete({
    where: { id },
  });
  return result;
};

export const getPostById = async (id: number) => {
  const result = await prisma.post.findUnique({
    where: {
      id: id || -1,
    },
  });
  return result;
};

export const getAllPublishedPosts = async () => {
  const result = await prisma.post.findMany({
    where: {
      published: true,
    },
  });
  return result;
};

export const getAllDraftPosts = async () => {
  const result = await prisma.post.findMany({
    where: {
      published: false,
    },
  });
  return result;
};
