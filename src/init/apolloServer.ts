// Core
import { ApolloServer } from 'apollo-server-express'

// Schema
import schema from '../schema'

// Init Apollo server
const apolloServer  = new ApolloServer({
    schema,
    context: ({req, res}) => { 
        return { req, res } // return node req, res 
    },
    playground: {
        settings: {
            "request.credentials": "include"
        }
    },
    subscriptions: {
        path: '/subscription' // Change subscriptions path, Default value is /graphql
    },
})

// Endpoints
const { graphqlPath, subscriptionsPath } = apolloServer

// Set path to subscriptions
export { apolloServer, graphqlPath, subscriptionsPath }      