import React from 'react'

import { Container } from '@mantine/core'
import PublishedPosts from 'features/posts/publishedPosts'
import DraftPosts from 'features/posts/draftPosts'

const HomePage = () => {
    return (
        <Container>
            <h1>Home Page</h1>
            <PublishedPosts />
            <DraftPosts />
        </Container>
    )
}

export default HomePage
