import { Container, List } from '@mantine/core'
import React, { useEffect } from 'react'
import { getAllPublishedPosts } from 'services/post/clientApi'
import { Post } from 'services/post/types'

const PublishedPosts = () => {
    const [posts, setPosts] = React.useState<Post[]>([])

    useEffect(() => {
        getPublishedPosts()
    }, [])

    const getPublishedPosts = async () => {
        const result = await getAllPublishedPosts()
        setPosts(result)
    }

    return (
        <Container>
            Published Posts
            <List>
                {posts.map((post) => (
                    <List.Item key={post.id}>{post.title}</List.Item>
                ))}
            </List>
        </Container>
    )
}

export default PublishedPosts
