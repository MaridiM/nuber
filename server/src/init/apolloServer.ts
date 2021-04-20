// Core
import { ApolloServer } from 'apollo-server-express'

// Schema
import schema from '../schema'
import pubSub from './pubSub'

// Utils
import decodeJWT from './../utils/decodeJWT'

// Init Apollo server
const apolloServer  = new ApolloServer({
    schema,
    context: ({req, res, connection}) => { 
        // Set data in context
        return {  
            req, 
            res, 
            pubSub,
            context: connection?.context, // currentUser in context.currentUser from onConnect subscription
        }  
    },
    playground: {
        settings: {
            "request.credentials": "include"
        }
    },
    subscriptions: {
        // Change subscriptions path, Default value is /graphql
        path: process.env.GQL_ENDPOINT_SUBSCRIPTION || "/subscriptions",
        // What happening on connection, with websocket
        onConnect: async connectionParams => {
            // connectionParams  = JWT token from  client
            // Get token from connectionParams
            const token = connectionParams['X-JWT']
            
            if(token) {
                // Get user from JWT token
                const user = await decodeJWT(token)
               if(user) {
                    // Set currentUser in context
                    // context => context.connection.context.currentUser
                    return { 
                        currentUser: user
                    }
                }

            }

            throw new Error('No JWT. Can\'t subscribe')
        },
    }
        
})



// Set path to subscriptions
export { apolloServer }      