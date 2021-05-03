// Core
import { useMutation } from '@apollo/client';
import { loader } from 'graphql.macro';
import React, { ChangeEventHandler, FC, useState } from 'react'
import { RouteComponentProps } from 'react-router';
import { toast } from 'react-toastify';

// Local
import AddPlacePresenter from './AddPlacePresenter'

// Hooks
import { usePlaces } from './../../@hooks'

// Utils
import { paths } from './../../@utils'

// Types
import { AddPlaceMutation, AddPlaceMutationVariables } from './../../@types/api'

interface IProps {}
interface IState {
    address: string
    name: string
    lat: number
    lng: number
    isFav: boolean
}

// GraphQL 
const MUTATION_ADD_PLACE = loader('./AddPlace.graphql')

const AddPlaceContainer: FC<RouteComponentProps<IProps>> = ({ history }) => {
    const [state, setState] = useState<IState>({
        address: '',
        name: '',
        lat: 1.34,
        lng: 1.34,
        isFav: false
    });

    const { getMyPlacesQuery } = usePlaces()
    // Mutation
    const [ _addPlace, { loading } ] = useMutation<
        AddPlaceMutation,
        AddPlaceMutationVariables
    >(MUTATION_ADD_PLACE, {
        refetchQueries:[{
            query: getMyPlacesQuery
        }],
        awaitRefetchQueries: true,
        onCompleted( data ) {
            const { AddPlace } = data
            if(!AddPlace.ok) return toast.error(AddPlace.error)
            
            toast.success('Place added')
            setTimeout(() => {
                history.push({
                    pathname: paths.places
                })
            }, 2000)
            return 
        },
        variables: {
            address: state.address,
            lat: state.lat,
            lng: state.lng,
            isFav: false,
            name: state.name,
        }
    })
    
    const onInputChange: ChangeEventHandler<HTMLInputElement> = async ( event ): Promise<void> => {
        const { name, value } = event.target  

        setState( state => ({
            ...state,
            [name]: value
        }))
    }

    return <AddPlacePresenter 
        onChange={onInputChange}
        loading={loading}
        onSubmit={_addPlace}
        {...state} 
    />
}

export default AddPlaceContainer
