// Core
import React from 'react'

// Conponents 
import { Button, Header, Helmet } from './../../Components'


import { paths } from 'src/@utils'
import { Container, ExtendedInput, ExtendedForm } from './Styled'

const VerifyPhonePresenter = () => {
    return (
        <Container>
            <Helmet title={'Verify Phone'} />
            <Header backTo={paths.phoneLogin} title={'Verify Phone Number'} />
            <ExtendedForm onSubmit={() => null}>
                <ExtendedInput
                    value={''}
                    placeholder={'Enter verification Code'}
                    onChange={null}
                />
                <Button value="Submit" onClick={null}/>
            </ExtendedForm>
        </Container>
    )
}

export default VerifyPhonePresenter
