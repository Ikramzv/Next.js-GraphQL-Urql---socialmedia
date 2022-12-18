import { cacheExchange, CacheExchangeOpts } from '@urql/exchange-graphcache'
import { createClient, dedupExchange, errorExchange, fetchExchange } from 'urql'


const client = createClient({
    url: process.env.NODE_ENV === "development" ? "http://localhost:4000/graphql" : "",
    exchanges: [
      dedupExchange,
      cacheExchange({
        
      } as CacheExchangeOpts),
      errorExchange({
        onError(error, operation) {
          console.log("====== ERROR =====", error , operation)
        },
        onOperation(operation) {
          return operation
        },
      }),
      fetchExchange,
    ],
})

export default client