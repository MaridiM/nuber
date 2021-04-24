// Core
import React, { ChangeEventHandler, FC, FormEventHandler, useState } from 'react'
import { RouteComponentProps } from 'react-router'

// Presenter
import PhoneLoginPresenter from './PhoneLoginPresenter'

// Interface for IState
interface IState { 
    countryCode: string
    phoneNumber: string
}


const PhoneLoginContainer: FC<RouteComponentProps<any>> = () => {
    
    const [state, setState] = useState<IState>({
        countryCode: '+380',
        phoneNumber: '970005433'
    })

    const onInputChange: ChangeEventHandler<HTMLInputElement | HTMLSelectElement> = event => {
        const { name, value } = event.target
        setState( state => ({
            ...state,
            [name]: value
        }))
    }   

    const onSubmit: FormEventHandler<HTMLFormElement> = event => {
        event.preventDefault()
        console.log(state)
    }

    return <PhoneLoginPresenter 
        countryCode={ state.countryCode } 
        phoneNumber={ state.phoneNumber } 
        onInputChange={ onInputChange }
        onSubmit={onSubmit}
    />
}

export default PhoneLoginContainer
