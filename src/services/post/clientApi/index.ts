import { baseUrl, httpInstance } from 'services/api'
import { Post } from '../types'

const url = `${baseUrl}post/`

export const createPost = async ({
    title,
    content,
}: {
    title: string
    content: string
}): Promise<void> => {
    const result = await httpInstance().post(url, { title, content })
    console.log('createPost result', result)
}

export const updatePostPublished = async (id: number): Promise<void> => {
    const result = await httpInstance().put(`${url}publish/${id}`)
    console.log('publishPost result', result)
}

export const deletePost = async (id: number): Promise<void> => {
    const result = await httpInstance().delete(`${url}${id}`)
    console.log('deletePost result', result)
}

export const getPostById = async (id: number): Promise<Post> => {
    const result = await httpInstance().get(`${url}${id}`)
    console.log('getPostById result', result)
    return result.data
}

export const getAllPublishedPosts = async (): Promise<Post[]> => {
    console.log('start getAllPublishedPosts ')
    const result = await httpInstance().post(`${url}isDraft`, {
        isDraft: false,
    })
    console.log('getAllPublishedPosts result', result)
    return result.data
}

export const getAllDraftPosts = async (): Promise<Post[]> => {
    const result = await httpInstance().post(`${url}isDraft`, { isDraft: true })
    // console.log('getAllDraftPosts result', result)
    return result.data
}
