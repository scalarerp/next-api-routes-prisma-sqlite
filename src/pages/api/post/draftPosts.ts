import { NextApiRequest, NextApiResponse } from 'next'
import { getAllDraftPosts } from 'services/post/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await getAllDraftPosts()
    console.log('getAllDraftPosts', result)
    res.status(200).json(result)
}
