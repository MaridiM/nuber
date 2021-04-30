// Core
import React, { ChangeEventHandler, FC, useEffect, useState } from 'react'
import { loader } from 'graphql.macro'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

// Local
import EditAccountPresenter from './EditAccountPresenter'

// Hooks
import { useProfile } from './../../@hooks'

// Types
import { 
    UpdateMyProfileMutation, 
    UpdateMyProfileMutationVariables 
} from './../../@types/api'

interface IState {
    email: string 
    firstName: string
    lastName: string
    profilePhoto: string
}
interface IProps {}


// GraphQL
const MUTATION_UPDATE_MY_PROFILE = loader('./EditAccount.graphql')


const EditAccountContainer: FC<IProps> = () => {
    const [state, setState] = useState<IState>({
        email: '',
        firstName: '',
        lastName: '',
        profilePhoto: '',
    })

    const { data, loading: profileLoading, getMyProfileQuery } = useProfile()
    
    useEffect(() => {
        if(!profileLoading) {
            if(data?.GetMyProfile.user) {
                const { email, firstName, lastName, profilePhoto } = data?.GetMyProfile.user
                console.log(email, firstName, lastName, profilePhoto)
                setState({ 
                    email: email || '', 
                    firstName, 
                    lastName, 
                    profilePhoto: profilePhoto || '' 
                })
            }
        }
    }, [data, profileLoading])

    // Mutation
    const [ _updateMyProfile, { loading } ] = useMutation<
        UpdateMyProfileMutation, 
        UpdateMyProfileMutationVariables
    >(MUTATION_UPDATE_MY_PROFILE, {
        refetchQueries: [{
            query: getMyProfileQuery 
        }],
        awaitRefetchQueries: true,
        onCompleted(data) {
            const { UpdateMyProfile } = data
            if(!UpdateMyProfile?.ok) return toast.error(UpdateMyProfile?.error)
            return toast.success('Profile updated')
        },
        variables: {
            email: state.email,
            firstName: state.firstName,
            lastName: state.lastName,
            profilePhoto: state.profilePhoto,
        }, 
    })

    const onInputChange: ChangeEventHandler<HTMLInputElement> = event => {
        const { name, value } = event.target
        setState( state => ({
            ...state,
            [name]: value
        }))

    }

    return (
        <EditAccountPresenter 
            onChange={onInputChange} 
            onSubmit={_updateMyProfile}
            loading={loading}
            uploading
            {...state}/>
    )
}

export default EditAccountContainer
