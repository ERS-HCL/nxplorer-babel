import { GraphQLServer, PubSub } from 'graphql-yoga'

export default () => {
  const resolvers = {
    Query: {
      hello: () => `Hello`
    },
    Counter: {
      countStr: counter => `Current count: ${counter.count}`
    },
    Subscription: {
      counter: {
        subscribe: (parent, args, { pubsub }) => {
          const channel = Math.random()
            .toString(36)
            .substring(2, 15) // random channel name
          let count = 0
          setInterval(
            () => pubsub.publish(channel, { counter: { count: count++ } }),
            2000
          )
          return pubsub.asyncIterator(channel)
        }
      }
    }
  }

  const pubsub = new PubSub()
  const server = new GraphQLServer({
    typeDefs: './server/schema/main.graphql',
    resolvers,
    context: { pubsub }
  })

  server.start(() => console.log('Server is running on localhost:4000'))
}
