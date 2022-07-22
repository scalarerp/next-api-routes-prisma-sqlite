import type { NextApiRequest, NextApiResponse } from "next";
import { deletePost } from "../../../services/post/prisma";

// DELETE /api/post/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = Number(req.query.id);

  if (req.method === "DELETE") {
    const result = await deletePost(postId);
    res.json(result);
  }
}
