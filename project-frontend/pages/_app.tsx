import '../styles/globals.css'

import { ApolloClient,InMemoryCache,ApolloProvider } from '@apollo/client'
import { AppProps } from 'next/dist/shared/lib/router/router';

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphql`,
  cache,
  // headers:{
  //   "Access-Control-Allow-Origin": ,
  //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  //   "Access-Control-Allow-Headers":
  //     "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  // },
  credentials: 'omit'
});

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
