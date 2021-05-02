// Core
import { ApolloError, DocumentNode, useQuery } from "@apollo/client"
import { loader } from "graphql.macro"

// Types
import { GetMyPlacesQuery } from './../../@types/api.d'


interface IUsePlaces {
    placesData?: GetMyPlacesQuery
    placesLoading: boolean
    placesError?: ApolloError
    getMyPlacesQuery: DocumentNode
}

// GraphQL
const QUERY_GET_MY_PLACES = loader('./GetMyPlaces.graphql')

export const usePlaces = ():IUsePlaces => {
    const { 
        data: placesData, 
        loading: placesLoading, 
        error: placesError 
    } = useQuery<GetMyPlacesQuery>(QUERY_GET_MY_PLACES)

    return {
        placesData,
        placesLoading,
        placesError,
        getMyPlacesQuery: QUERY_GET_MY_PLACES
    }
}