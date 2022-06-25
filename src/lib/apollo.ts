import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rr8hl31iis01ywc05d1ucd/master',
  cache: new InMemoryCache()
})
