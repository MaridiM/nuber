// Core
import React, { FC, MutableRefObject } from 'react'

// Styled
import { Container } from './Styled'

// Interface for props
export interface IProps {
    id?: string
    placeholder?: string
    type?: string
    required?: boolean
    value?: string | number
    name?: string
    onChange: any
    className?: string
    accept?: string
    min?: string | number
    max?: string | number 
    uploadInputRef?: MutableRefObject<any>
    autocomplete?: string
    readonly?: boolean
}

const Input: FC<IProps> = ({
    id,
    placeholder,
    type,
    required,
    value,
    name,
    onChange,
    className,
    accept,
    min,
    max,
    uploadInputRef,
    autocomplete,
    readonly
}) => {
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
            min={ min}
            max={ max}
            ref={ uploadInputRef }
            autoComplete={ autocomplete }
            readOnly={ readonly }
        />
    )
}

export default Input
