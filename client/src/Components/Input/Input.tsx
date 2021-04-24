// Core
import React, { FC } from 'react'

// Styled
import { Container } from './Styled'

// Interface for props
export interface IProps {
    placeholder: string
    type?: string
    required?: boolean
    value: string
    name?: string
    onChange: any
    className?: string
}

const Input: FC<IProps> = ({ placeholder, type, required, value, name, onChange, className }) => {
    return (
        <Container
            placeholder={ placeholder }
            type={ type }
            required={ required }
            value={ value }
            name={ name }
            onChange={ onChange }
            className={ className }
        />
    )
}

export default Input
