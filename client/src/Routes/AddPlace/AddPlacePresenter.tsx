// Core
import { MutationFunction } from '@apollo/client'
import React, { ChangeEvent, FC } from 'react'

// Utils
import { paths } from './../../@utils'

// Components
import { Button, Form, Header, Helmet } from './../../Components'
import { Container, ExtendedInput, ExtendedLink } from './Styled'

// Types
import { AddPlaceMutation, AddPlaceMutationVariables } from './../../@types/api'
interface IProps {
    address: string
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    loading: boolean
    onSubmit: MutationFunction<AddPlaceMutation, AddPlaceMutationVariables>
}

const AddPlacePresenter: FC<IProps> = ({ address, name, onChange, loading, onSubmit}) => {
    return (
        <>
            <Helmet title={'Add Place'}/>
            <Header title={'Add Place'} backTo={paths.home}/>
            <Container>
                <Form onSubmit={ onSubmit}>
                    <ExtendedInput 
                        type="text" 
                        placeholder={'Name'}
                        name={'name'}
                        value={name} 
                        onChange={onChange} />
                    <ExtendedInput 
                        type="text" 
                        placeholder={'Address'}
                        name={'address'}
                        value={address} 
                        onChange={onChange} />
                    <ExtendedLink to={paths.findAddress}>Pick place from map</ExtendedLink>
                    <Button 
                        onClick={null} 
                        value={loading ? 'Adding place' : 'Add place'} 
                    />
                </Form>
            </Container>
        </>
    )
}

export default AddPlacePresenter
