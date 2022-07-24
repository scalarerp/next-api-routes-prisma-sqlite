import React from 'react'
import { Group, Container } from '@mantine/core'
import { headerLinks } from './headerLinks'

const HeaderLinks = () => {
    const items = headerLinks.map((link) => {
        return (
            <a
                key={link.label}
                href={link.link}
                // className={classes.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </a>
        )
    })

    return (
        <Container>
            <div>
                <Group spacing={15}>{items}</Group>
            </div>
        </Container>
    )
}

export default HeaderLinks
