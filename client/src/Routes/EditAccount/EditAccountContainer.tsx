// Core
import axios from 'axios'
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
    uploading: boolean
    file?: Blob 
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
        uploading: false,
    })

    const { data, loading: profileLoading, getMyProfileQuery } = useProfile()
    
    useEffect(() => {
        if(!profileLoading) {
            if(data?.GetMyProfile.user) {
                const { email, firstName, lastName, profilePhoto } = data?.GetMyProfile.user
                setState(state => ({ 
                    ...state,
                    email: email || '', 
                    firstName, 
                    lastName, 
                    profilePhoto: profilePhoto || '' 
                }))
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

    const onInputChange: ChangeEventHandler<HTMLInputElement> = async ( event ): Promise<void> => {
        const { name, value, files } = event.target

        if(files) {
            setState( state => ({
                ...state,
                uploading: true
            }))
            // Append file on FormData
            const formData = new FormData()
            formData.append('file', files[0])
            formData.append('api_kay', process.env.REACT_APP_CLOUDINARY_API_KAY || '')
            formData.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET || '')
            formData.append('timestamp', String(Date.now() / 1000))

            // Upload file on Cloudinary
            const {data: { secure_url }} = await axios.post(process.env.REACT_APP_CLOUDINARY_API_URL || '', formData)
            if (secure_url) {
                // Set Photo in state from cloudinary
                setState( state => ({
                    ...state,
                    profilePhoto: secure_url ,
                    uploading: false,
                }))
            }
        }

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
            {...state}/>
    )
}

export default EditAccountContainer
