// Core
import React, { ChangeEvent, FC } from 'react'
import { MutationFunction } from '@apollo/client'

// Utils
import { paths } from './../../@utils'

// Components
import { Button, Header, Helmet, PhotoInput } from './../../Components'

// Styled
import { Container, ExtendedForm, ExtendedInput } from './Styled'
import {
    UpdateMyProfileMutation,
    UpdateMyProfileMutationVariables
} from './../../@types/api'

// Types
interface IProps {
    email: string
    firstName: string
    lastName: string
    profilePhoto: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    onSubmit: MutationFunction<UpdateMyProfileMutation, UpdateMyProfileMutationVariables>
    loading: boolean
    uploading: boolean
}


const EditAccountPresenter: FC<IProps>= ({
    firstName,
    lastName,
    email,
    onSubmit,
    profilePhoto,
    onChange,
    loading,
    uploading
}) => {
    return (
        <Container>
            <Helmet title='Edit Account' />
            <Header title={'Edit Account'} backTo={paths.home} />
            <ExtendedForm onSubmit={ onSubmit }>
                <PhotoInput 
                    uploading={uploading}
                    fileUrl={profilePhoto}
                    onChange={onChange}
                    
                />
                <ExtendedInput
                    onChange={onChange}
                    type={"text"}
                    value={firstName}
                    placeholder={"First name"}
                    name={"firstName"}
                />
                <ExtendedInput
                    onChange={onChange}
                    type={"text"}
                    value={lastName}
                    placeholder={"Last name"}
                    name={"lastName"}
                />
                <ExtendedInput
                    onChange={onChange}
                    type={"email"}
                    value={email}
                    placeholder={"Email"}
                    name={"email"}
                />
                <Button 
                    onClick={null} 
                    value={loading ? "Loading" : "Update"} 
                    />
            </ExtendedForm>
        </Container>
    )
}

export default EditAccountPresenter
