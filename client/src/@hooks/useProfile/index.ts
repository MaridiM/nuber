// Core
import { ApolloError, useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

// Types
import { GetMyProfileQuery } from "./../../@types/api"

interface IUseProfile {
    data?: GetMyProfileQuery
    loading: boolean
    error?: ApolloError
} 

// GraphQL
const QUERY_GET_MY_PROFILE = loader('./GetMyProfile.graphql')

export const useProfile = (): IUseProfile => {
    const { data, loading, error } = useQuery<GetMyProfileQuery>(QUERY_GET_MY_PROFILE)

    return { data, loading, error }
}