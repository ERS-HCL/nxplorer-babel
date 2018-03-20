import { GraphQLServer, PubSub } from 'graphql-yoga'
import { resolvers } from './resolvers'

export default () => {
  const pubsub = new PubSub()
  const server = new GraphQLServer({
    typeDefs: './server/schema/main.graphql',
    resolvers,
    context: { pubsub }
  })

  server.start(() => console.log('Server is running on localhost:4000'))
}
