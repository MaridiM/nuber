// Core
import { MutationFunction } from '@apollo/client'
import React, { FC } from 'react'

// Styled
import { Address, Container, Icon, Name, Place } from './Styled'

// Types
interface IProps {
    address: string
    fav: boolean
    name: string
    onStartPress?: MutationFunction<any, any>
}

const PlacePresenter: FC<IProps> = ({ address, fav, name, onStartPress }) => {
    return (
        <Place>
            <Icon onClick={onStartPress as any }>{fav ? '★' : '✩'}</Icon>
            <Container>
                <Name>{ name }</Name>
                <Address>{ address }</Address>
            </Container>
        </Place>
    )
}

export default PlacePresenter
