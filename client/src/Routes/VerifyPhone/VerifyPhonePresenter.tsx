// Core
import React, { ChangeEvent, FC } from 'react'

// Conponents 
import { Button, Header, Helmet } from './../../Components'

// Utils
import { paths } from './../../@utils'

// Styled
import { Container, ExtendedInput, ExtendedForm } from './Styled'
import { MutationFunction } from '@apollo/client'
import { CompletePhoneVerificationMutationVariables } from 'src/@types/api'

// Interface IProps
interface IProps {
    verificationKey: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: MutationFunction<any, CompletePhoneVerificationMutationVariables>
    loading: boolean
}


const VerifyPhonePresenter: FC<IProps> = ({ verificationKey, onChange, onSubmit, loading }) => {
    return (
        <Container>
            <Helmet title={'Verify Phone'} />
            <Header backTo={paths.phoneLogin} title={'Verify Phone Number'} />
            <ExtendedForm onSubmit={ onSubmit }>
                <ExtendedInput
                    value={verificationKey}
                    name={'key'}
                    placeholder={'Enter verification Code'}
                    onChange={onChange}
                />
                <Button value={loading ? 'Verifying' : 'Submit' } onClick={null}/>
            </ExtendedForm>
        </Container>
    )
}

export default VerifyPhonePresenter
