import { GraphQLServer, PubSub } from 'graphql-yoga'
import { resolvers } from './resolvers'

export default () => {
  const pubsub = new PubSub()
  const server = new GraphQLServer({
    typeDefs: './server/schema/main.graphql',
    resolvers,
    context: { pubsub }
  })

  const port = process.env.GRAPHQL_PORT || 3000
  const tracing = process.env.GRAPHQL_TRACING || false
  const debug = process.env.GRAPHQL_DEBUG || false
  const playground = process.env.GRAPHQL_PLAYGROUND || '/'
  const options = {
    port,
    debug,
    playground,
    tracing
  }

  server.start(options, ({ port, tracing }) =>
    console.log(
      `Server started, listening on port ${port} for incoming requests. Tracing : ${tracing} `
    )
  )
}
