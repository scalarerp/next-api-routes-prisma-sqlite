import { Container, List } from '@mantine/core'
import React, { useEffect } from 'react'
import { getAllDraftPosts } from 'services/post/clientApi'
import { Post } from 'services/post/types'

const DraftPosts = () => {
    const [posts, setPosts] = React.useState<Post[]>([])

    useEffect(() => {
        getPublishedPosts()
    }, [])

    const getPublishedPosts = async () => {
        const result = await getAllDraftPosts()
        setPosts(result)
    }

    return (
        <Container>
            Draft Posts
            <List>
                {posts.map((post) => (
                    <List.Item key={post.id}>{post.title}</List.Item>
                ))}
            </List>
        </Container>
    )
}

export default DraftPosts
