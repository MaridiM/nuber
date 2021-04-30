// Core
import React, { FC } from 'react'

// Styled
import { Container } from './Styled'

// Interface for props
export interface IProps {
    id?: string
    placeholder?: string
    type?: string
    required?: boolean
    value?: string
    name?: string
    onChange: any
    className?: string
    accept?: string
}

const Input: FC<IProps> = ({id, placeholder, type, required, value, name, onChange, className, accept }) => {
    return (
        <Container
            id={ id }
            placeholder={ placeholder }
            type={ type }
            required={ required }
            value={ value }
            name={ name }
            onChange={ onChange }
            className={ className }
            accept={ accept }
        />
    )
}

export default Input
