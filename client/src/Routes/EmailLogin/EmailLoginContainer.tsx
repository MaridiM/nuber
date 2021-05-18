// Core
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'
import { toast } from 'react-toastify'
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'

// Local
import EmailLoginPresenter from './EmailLoginPresenter'

// Utils
import { paths } from './../../@utils'

// Types
import {
    EmailSignInMutation,
    EmailSignInMutationVariables
} from './../../@types/api'
import { useAuth } from 'src/@hooks'

interface IProps {}
interface IState {
    email: string
    password: string
}

// GraphQL
const MUTATION_EMAIL_LOGIN = loader('./EmailLogin.graphql')


const EmailLoginContainer: FC<IProps> = () => {
    const [state, setState] = useState<IState>({
        email: '',
        password: '',
    })

    const { authentication } = useAuth()
    // Mutation
    const [ _emailLogin, { loading } ] = useMutation<
        EmailSignInMutation,
        EmailSignInMutationVariables
    >(MUTATION_EMAIL_LOGIN, {
        onCompleted( data ) {
            const { EmailSignIn } = data
            if(!EmailSignIn.ok) return toast.error(EmailSignIn.error)
            
            toast.success('You are successfully logged in')
            authentication(EmailSignIn?.token || '')
            setTimeout(() => {
                document.location.pathname = paths.home
            }, 2000)
            return 
        },
        variables: {
            email: state.email,
            password: state.password
        }
    })

    const onInputChange: ChangeEventHandler<HTMLInputElement> = async ( event ): Promise<void> => {
        const { name, value } = event.target
        setState( state => ({
            ...state,
            [name]: value
        }))
    }

    const onSubmit: FormEventHandler<HTMLFormElement> = async (event): Promise<void> => {
        event.preventDefault()
        await _emailLogin()
    }

    return <EmailLoginPresenter 
        loading={ loading }
        onSubmit={onSubmit}
        onInputChange={onInputChange}
        { ...state }
    />
}

export default EmailLoginContainer
