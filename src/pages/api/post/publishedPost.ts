import { NextApiRequest, NextApiResponse } from 'next'
import { getAllPublishedPosts } from 'services/post/prisma'

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const result = await getAllPublishedPosts()
    // console.log('getAllPublishedPosts', result)
    res.status(200).json(result)
}
