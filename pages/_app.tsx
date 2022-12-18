import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider } from 'urql'
import client from '../client/client'
import "../styles/main.css"


export default function App({ Component, pageProps , session }: AppProps & { session: any }) {
  return (
    <SessionProvider session={session} baseUrl='http://localhost:3000' refetchInterval={60 * 5} refetchOnWindowFocus={true} >
      <Provider value={client} >
        <Head>
          <title>Media App</title>
        </Head>
        <Component {...pageProps} />
      </Provider>
    </SessionProvider>
  )
}