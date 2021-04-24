// Core
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import { RouteComponentProps } from 'react-router'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

// Presenter
import PhoneLoginPresenter from './PhoneLoginPresenter'

// Graphql
import { MUTATION_PHONE_SIGN_IN } from './Phone.queries'


// Interface for IState
interface IState { 
    countryCode: string
    phoneNumber: string
}


const PhoneLoginContainer: FC<RouteComponentProps<any>> = () => {
    const [state, setState] = useState<IState>({
        countryCode: '+380',
        phoneNumber: ''
    })

    const [_startPhoneVerification, {data, error, loading}] = useMutation(MUTATION_PHONE_SIGN_IN) 
    console.log({data, error, loading})


    const onInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
        const { name, value } = event.target
        setState( state => ({
            ...state,
            [name]: value
        }))
    }   

    const onSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        // Validation Phone
        const isValid = /^\+[1-9]{1}[0-9]{7,11}$/.test(
            `${state.countryCode}${state.phoneNumber}`
        )
        if (!isValid) {
            toast.error('Please write a valid phone number')
        }
        return _startPhoneVerification({
            variables: {
                phoneNumber: `${state.countryCode}${state.phoneNumber}`
            }
        })
    }

    return <PhoneLoginPresenter 
        countryCode={ state.countryCode } 
        phoneNumber={ state.phoneNumber } 
        onInputChange={ onInputChange }
        onSubmit={onSubmit}
    />
}

export default PhoneLoginContainer
