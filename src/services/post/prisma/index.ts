import prisma from '../../prismaClient'

export const updatePostPublished = async (id: number) => {
    const result = await prisma.post.update({
        where: { id },
        data: { published: true },
    })
    return result
}

export const deletePost = async (id: number) => {
    const result = await prisma.post.delete({
        where: { id },
    })
    return result
}

export const getPostById = async (id: number) => {
    const result = await prisma.post.findUnique({
        where: {
            id: id || -1,
        },
    })
    return result
}

export const getAllDraftPosts = async (isDraft: boolean) => {
    const result = await prisma.post.findMany({
        where: {
            published: isDraft,
        },
    })
    return result
}
