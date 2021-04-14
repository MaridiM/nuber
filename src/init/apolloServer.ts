// Core
import { ApolloServer } from 'apollo-server-express'

// Schema
import schema from '../schema'
import pubSub from './pubSub'

// Init Apollo server
const apolloServer  = new ApolloServer({
    schema,
    context: ({req, res}) => { 
        // Set data in  context
        return { req, res, pubSub}  
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