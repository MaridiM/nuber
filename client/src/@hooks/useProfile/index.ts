// Core
import { ApolloError, DocumentNode, useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

// Types
import { GetMyProfileQuery } from "./../../@types/api"

interface IUseProfile {
    userData?: GetMyProfileQuery
    userDataLoading: boolean
    userDataError?: ApolloError
    getMyProfileQuery: DocumentNode
} 

// GraphQL
const QUERY_GET_MY_PROFILE = loader('./GetMyProfile.graphql')

export const useProfile = (): IUseProfile => {
    const {
        data: userData,
        loading: userDataLoading,
        error: userDataError
    } = useQuery<GetMyProfileQuery>(QUERY_GET_MY_PROFILE)

    return { 
        userData,
        userDataLoading,
        userDataError,
        getMyProfileQuery: QUERY_GET_MY_PROFILE 
    }
}