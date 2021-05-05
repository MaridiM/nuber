// Core
import { loader } from 'graphql.macro'
import React, { FC } from 'react'
import { useMutation } from '@apollo/client'

// Local
import PlacePresenter from './PlacePresenter'

// Hooks
import { usePlaces } from 'src/@hooks'

// Types
import { EditPlaceMutation, EditPlaceMutationVariables } from './../../@types/api'
interface IProps {
    address: string
    fav: boolean
    id: number
    name: string
}

// GraphQL
const MUTATION_EDIT_PLACE = loader('./Place.graphql')

const PlaceContainer: FC<IProps> = ({ address, fav, id, name }) => {
    const { getMyPlacesQuery } = usePlaces()
    // Mutation 
    const [ _editPlace ] = useMutation<
        EditPlaceMutation, 
        EditPlaceMutationVariables
    >(MUTATION_EDIT_PLACE, {
        refetchQueries: [{
            query: getMyPlacesQuery
        }],
        awaitRefetchQueries: true,
        variables: { isFav: !fav, id, name }
    })

    return (
        <PlacePresenter 
            address={address}
            fav={fav}
            name={name}
            onStartPress={_editPlace}
        />
    )
}

export default PlaceContainer
