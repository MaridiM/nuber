// Core
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import { RouteComponentProps, useHistory } from 'react-router'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'
import { loader } from 'graphql.macro'

// Presenter
import PhoneLoginPresenter from './PhoneLoginPresenter'

// Types
import { 
    StartPhoneVerificationMutation, 
    StartPhoneVerificationMutationVariables 
} from './../../@types/api'

// Utils
import { paths } from './../../@utils'

// Graphql
const MUTATION_PHONE_SIGN_IN = loader('./Phone.graphql')

// Interface for IState
interface IState { 
    countryCode: string
    phoneNumber: string
}
interface ILocalHistoryState  {
    phone: string
}


const PhoneLoginContainer: FC<RouteComponentProps<any>> = () => {
    const [state, setState] = useState<IState>({
        countryCode: '+380',
        phoneNumber: ''
    })

    const history = useHistory<ILocalHistoryState>()

    const phone = `${state.countryCode}${state.phoneNumber}`

    const [ _startPhoneVerification, { loading } ] = useMutation<
        StartPhoneVerificationMutation, 
        StartPhoneVerificationMutationVariables
    >(MUTATION_PHONE_SIGN_IN, {
        // onCompleted callback. 
        // This enables us to interact with the mutation's result data as soon as it's available
        onCompleted( data ) {
            const { StartPhoneVerification } = data
            if(!StartPhoneVerification.ok) return toast.error(StartPhoneVerification.error)
            toast.success('SMS Sent! Redirecting you...')
            return setTimeout(() => {
                history.push({
                    pathname: paths.verifyPhone,
                    state: {
                        phone 
                    }
                })
            }, 2000)
        }
    }) 


    const onInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
        const { name, value } = event.target
        setState( state => ({
            ...state,
            [name]: value
        }))
    }   

    const onSubmit: FormEventHandler<HTMLFormElement> = async event => {
        event.preventDefault()
        // Validation Phone
        const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(phone)

        // Error if not valid
        if (!isValid) {
            toast.error('Please write a valid phone number')
            return 
        }


        // If valid to send request and return it
        await _startPhoneVerification({
            variables: {
                phoneNumber: phone
            }
        })
        
    }

    return <PhoneLoginPresenter 
        countryCode={ state.countryCode } 
        phoneNumber={ state.phoneNumber } 
        onInputChange={ onInputChange }
        onSubmit={onSubmit}
        loading={loading}
    />
}

export default PhoneLoginContainer
