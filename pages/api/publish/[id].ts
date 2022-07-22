import type { NextApiRequest, NextApiResponse } from "next";
import { updatePostPublished } from "../../../services/post/prisma";

// PUT /api/publish/:id
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const postId = Number(req.query.id);
  const post = updatePostPublished(postId);
  res.json(post);
}
