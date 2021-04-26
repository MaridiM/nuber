// Core
import React, { FC } from 'react'

// Components
import { BackArrow } from '..'

// Styled
import { Container, Title } from './Styled'

// Interface for IProps
interface IProps {
    title: string
    backTo?: string
}


const Header: FC<IProps> = ({ title, backTo }) => {
    return (
        <Container>
            { backTo && <BackArrow backTo={backTo} /> }
            <Title> {title}</Title>
        </Container>
    )
}

export default Header
