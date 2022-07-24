import type { NextApiRequest, NextApiResponse } from 'next'
import { deletePost, getPostById } from 'services/post/prisma'
import { ApiMethods } from 'services/types'

// /api/post/:id
export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const postId = Number(req.query.id)
    console.log(postId)

    switch (req.method) {
        case ApiMethods.GET:
            const resultGet = await getPostById(postId)
            res.status(200).json(resultGet)
            break
        case ApiMethods.DELETE:
            const resultDelete = await deletePost(postId)
            res.status(200).json(resultDelete)
            break
        default:
            res.setHeader('Allow', [ApiMethods.GET, ApiMethods.DELETE])
            res.status(405).end(`Method ${req.method} Not Allowed`)
    }
}
