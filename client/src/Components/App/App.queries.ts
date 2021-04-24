// Core
import { gql } from "graphql.macro"

export const QUERY_IS_LOGGED_IN = gql`
    query {
        isLoggedIn @client
    }
`