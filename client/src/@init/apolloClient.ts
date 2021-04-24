// Core
import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    InMemoryCacheConfig,
    makeVar,
    NormalizedCacheObject,
    ReactiveVar,
} from '@apollo/client'
import { setContext} from '@apollo/client/link/context'

// Config
import { SERVER_HOST, SERVER_GRAPHQL_ENDPOINT } from './config'

const uri = `http://${SERVER_HOST}${SERVER_GRAPHQL_ENDPOINT}`


/**
 * CACHE: \
 * Reactive Variable GraphQL, Auth value is false default
 */

// InMemoryCache Options
const cacheOptions: InMemoryCacheConfig = {
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isAuth()
                    }
                    
                },
                isLoggedOut: {
                    read() {
                        localStorage.remove('jwt')
                        return isAuth()
                    }
                },
            }
        }
    }
}

export const isAuth: ReactiveVar<boolean> = makeVar<boolean>(!!localStorage.getItem('jwt'))
const cache:InMemoryCache = new InMemoryCache(cacheOptions)


/**
 * AUTH \
 * Auth config, end set in context
 */

const authLink = setContext( (_, { headers } ) => {
    // Get item from  local storage
    const token = localStorage.getItem('jwt')
    // Return all headers, and set authorization: token
    return { 
        ...headers,
        "X-JWT": token ? token : ''
    }
})


/**
 * APOLLO: HttpLink\
 * Create HttpLink, \
 * using cookies for login and session management with a backend
 */
const httpLink = new HttpLink({ 
    uri, 
    headers: authLink,
    credentials: 'include'  // using cookies for login and session management with a backend
})
// Wrapper httpLink in context
const wrapperHttpLink = authLink.concat(httpLink)


/**
 * APOLLO: Create ApolloClient \
 * Create apollo Client and set Link server, and cache 
 */
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    // Cache initialization
    cache,
    link: wrapperHttpLink
})

// Endpoint Client
export default client