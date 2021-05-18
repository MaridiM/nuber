// Core
import { useMutation } from '@apollo/client';
import axios from 'axios';
import { loader } from 'graphql.macro';
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { toast } from 'react-toastify';

// Local
import SignUpPresenter from './SignUpPresenter'

// Utils
import { paths } from './../../@utils'

// Hooks
import { useAuth } from './../../@hooks'

// Types
import {
    EmailSignUpMutation,
    EmailSignUpMutationVariables
} from './../../@types/api';

interface IProps {}
interface IState {
    firstName: string
    lastName: string
    email: string
    password: string
    profilePhoto: string
    phoneNumber: string
    age: number
    uploading: boolean
}
interface ILocalHistoryState  {
    readonly phone: string
}

// GraphGL
const MUTATION_EMAIL_SIGN_UP = loader('./SignUp.graphql')


const SignUpContainer: FC<RouteComponentProps<IProps, any, ILocalHistoryState>> = ({ history, location }) => {
    !location.state && history.push({ pathname: paths.phoneLogin})
    // If not exist state in location, redirect to home page
    const [state, setState] = useState<IState>({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profilePhoto: '',
        phoneNumber: location.state.phone,
        age: 18,
        uploading: false,
    })

    const { authentication } = useAuth()

    // Mutation
    const [ _emailSignUp, { loading }] = useMutation<
        EmailSignUpMutation,
        EmailSignUpMutationVariables
    >(MUTATION_EMAIL_SIGN_UP, {
         variables: {
            firstName: state.firstName,
            lastName: state.lastName,
            email: state.email,
            password: state.password,
            profilePhoto: state.profilePhoto,
            phoneNumber: state.phoneNumber,
            age: Number(state.age),
        },
        onCompleted( data ) {
            const { EmailSignUp } = data
            if(!EmailSignUp.ok) return toast.error(EmailSignUp.error)
            
            toast.success('You are successfully logged in')
            if(EmailSignUp?.token) {
                authentication(EmailSignUp?.token)
            }
            setTimeout(() => {
                document.location.pathname = paths.home
            }, 2000)
            return 
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

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event): Promise<any> => {
        event.preventDefault()
        // Validation Phone, mail
        const isValidEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email)
        
        // Error if not valid
        if (!isValidEmail) return toast.error('Please write a valid email')

        // Send request
        await _emailSignUp()
        return 
    }

    return <SignUpPresenter 
        loading={loading}
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        { ...state }
    />
}

export default SignUpContainer
