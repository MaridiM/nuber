// Core
import {
    ApolloClient,
    ApolloLink,
    from,
    HttpLink,
    InMemoryCache,
    InMemoryCacheConfig,
    makeVar,
    NextLink,
    NormalizedCacheObject,
    Operation, 
    ReactiveVar,
} from '@apollo/client'

// // Config
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
const authLink: ApolloLink = new ApolloLink((_operation: Operation, _forward: NextLink) => {
    // Get item from  local storage
    const token = localStorage.getItem('jwt')

    _operation.setContext(({ headers }) => ({ headers: {
        "X-JWT": token ? token : '', // however you get your token
        ...headers
    }}))
    return _forward(_operation)
})

/**
 * APOLLO: HttpLink\
 * Create HttpLink, \
 * using cookies for login and session management with a backend
 */
const httpLink: HttpLink = new HttpLink({ uri })
const link: ApolloLink = from([ authLink, httpLink ])

/**
 * APOLLO: Create ApolloClient \
 * Create apollo Client and set Link server, and cache 
 */
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    // Cache initialization
    cache,
    link,
    credentials: 'include' // using cookies for login and session management with a backend
})

// Endpoint Client
export default client