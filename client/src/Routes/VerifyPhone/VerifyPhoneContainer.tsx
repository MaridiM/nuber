// Core
import React, { ChangeEventHandler, FC,  useState } from 'react'
import { loader } from 'graphql.macro'
import { RouteComponentProps } from 'react-router'
import { toast } from 'react-toastify'
import { useMutation } from '@apollo/client'

// Local
import VerifyPhonePresenter from './VerifyPhonePresenter'

// Utils
import { paths } from './../../@utils'

// Types
import { 
    CompletePhoneVerificationMutation,
    CompletePhoneVerificationMutationVariables
} from './../../@types/api'

// Hooks
import { useAuth } from './../../@hooks'

// GraphQL
const MUTATION_COMPLETE_PHONE_VERIFICATION = loader('./VerifyPhone.graphql')

// Interface for IProps, IState
interface IProps extends  RouteComponentProps<any, any, ILocalHistoryState> {}
interface IState {
    key: string
    phone: string 
}
interface ILocalHistoryState  {
    phone: string
}

const VerifyPhoneContainer: FC<IProps> = ({ location, history }) => {
    // If not exist state in location, redirect to home page
    !location.state && history.push(paths.home)
    const [ verifyState, setVerifyState ] = useState<IState>({
        key: '',
        phone: location.state.phone
    })
    const { authentication } = useAuth()


    // Mutations
    const [ _completePhoneVerification, { loading } ] = useMutation<
        CompletePhoneVerificationMutation, 
        CompletePhoneVerificationMutationVariables
    >(MUTATION_COMPLETE_PHONE_VERIFICATION, {
        variables: {
            key: verifyState.key,
            phoneNumber: verifyState.phone
        },
        async onCompleted( data ) {
            const { CompletePhoneVerification } = data
            if(!CompletePhoneVerification?.ok) return toast.error(CompletePhoneVerification?.error) 
            // If CompletePhoneVerification.ok
            toast.success('You\'re verified, logging in now')
            
            // if token exist
            if(CompletePhoneVerification?.token) {
                authentication(CompletePhoneVerification?.token)
            } 

            return 
        }
    })
    
    // Handler for input 
    const onInputChange: ChangeEventHandler<HTMLInputElement> = event => {
        const { name, value } = event.target
        setVerifyState(state =>({
            ...state,
            [name]: value,
        } as IState))
    } 

    return (
        <VerifyPhonePresenter 
            verificationKey={verifyState.key} 
            onChange={onInputChange} 
            onSubmit={_completePhoneVerification}
            loading={ loading }
        />
    )
}

export default VerifyPhoneContainer