import type { NextApiRequest, NextApiResponse } from 'next'
import { getAllDraftPosts } from 'services/post/prisma'

// /api/post/:id
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { isDraft } = req.body
    console.log(isDraft)

    const result = await getAllDraftPosts(isDraft)
    // console.log('getAllDraftPosts', result)
    res.status(200).json(result)
}
