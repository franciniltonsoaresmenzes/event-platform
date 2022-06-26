import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: import.meta.env.VITE_API_ACESS_TOKEN,
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_API_URL}`,
  },
  cache: new InMemoryCache()
})



