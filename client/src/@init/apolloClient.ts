// Core
import {
    ApolloClient,
    ApolloLink,
    from,
    HttpLink,
    InMemoryCache,
    makeVar,
    NextLink,
    NormalizedCacheObject,
    Operation, 
    ReactiveVar,
    split,
    concat,
} from '@apollo/client'
import { WebSocketLink } from '@apollo/client/link/ws'
import { getMainDefinition } from '@apollo/client/utilities'
import { onError } from '@apollo/client/link/error'
import { toast } from 'react-toastify'

// // Config


/**
 * isAuth /
 * return  true or false, by localStorage.getItem('jwt')
 */
export const isAuth: ReactiveVar<boolean> = makeVar<boolean>(!!localStorage.getItem('jwt'))

const uri = `http://${process.env.REACT_APP_SERVER_HOST}${process.env.REACT_APP_SERVER_GRAPHQL_ENDPOINT}`
const wsUri = `ws://${process.env.REACT_APP_SERVER_HOST}${process.env.REACT_APP_SERVER_GRAPHQL_SUBSCRIPTION_ENDPOINT}`

/** 
 * AUTH \
 * Auth config, end set in context
 */
const getToken = (): string | null => {
    // Get item from  local storage
    const token = localStorage.getItem('jwt')
    if (!token) return null
    return token
}
const authLink: ApolloLink = new ApolloLink((_operation: Operation, _forward: NextLink) => {
    _operation.setContext(({ headers }) => ({ headers: {
        "X-JWT": getToken(), // however you get your token
        ...headers
    }}))
    return _forward(_operation)
})

/**
 * APOLLO: HttpLink \
 * Create HttpLink
 */
const httpLink: HttpLink = new HttpLink({ uri })



/**
 * WebSocketLink
 */
const wsLink: WebSocketLink =  new WebSocketLink({
    uri: wsUri,
    options: {
        connectionParams: {
            'X-JWT':  getToken()
        },
        reconnect: true
    }
})

/**
 * Combine WSLink and httpLink
 * like filter for backend
 */
const combineLinks: ApolloLink = split(
    ({ query }) => {
        const { kind, operation }: any = getMainDefinition(query)
        return kind === 'OperationDefinition' && operation === 'subscription'
    },
    wsLink,
    httpLink
)

/**
 * ErrorLink
 * If exist error to show errors 
 * Show errors using toast.error
 */
const errorLink: ApolloLink = onError(({ graphQLErrors, networkError}) => {
    if(graphQLErrors) {
        graphQLErrors.map(({message}) => 
            toast.error(`Unexpected error: ${message}`)
        )
    }
    if(networkError) {
        // Show error if user networ or connection  with  server will down
        toast.error(`Network error: ${networkError}`)
    }
})



/**
 * APOLLO: Link \
 * Create link, \
 * using authLink, and combineLinks with httpLink \
 * and wsLink, and errorLink
 */
const link: ApolloLink = from([
    errorLink, 
    concat(authLink, combineLinks)
])



/**
 * APOLLO: Create ApolloClient \
 * Create apollo Client and set Link server, and cache 
 */
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    // Cache initialization
    cache: new InMemoryCache(),
    link,
    credentials: 'include' // using cookies for login and session management with a backend
})

// Endpoint Client
export default client