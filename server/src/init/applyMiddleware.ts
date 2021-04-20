// Apollo server
import { apolloServer } from './apolloServer'

// Express App 
import { app } from './app'

// Apply  middleware to apollo server, with app and cors: false
apolloServer.applyMiddleware({
    app, 
    path: process.env.GQL_ENDPOINT_GRAPHQL || '/graphql',
    cors: false, 
    bodyParserConfig: true
})

// Endpoints
const { graphqlPath, subscriptionsPath } = apolloServer

export { apolloServer, graphqlPath, subscriptionsPath }