import { Container } from '@mantine/core'
import { AppProps } from 'next/app'
import HeaderLinks from 'components/header'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <Container>
            <HeaderLinks />
            <Component {...pageProps} />
        </Container>
    )
}

export default App
