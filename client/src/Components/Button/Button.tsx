// Core
import React, { FC } from 'react'

// Styled
import { Container } from './Styled'

// Interface for IProps
interface IProps {
    value: string
    onClick: any
    disabled?: boolean
    className?: string
}


const Button: FC<IProps> = ({ value, onClick, disabled = false, className }) => {
    return (
        <Container
            value={value}
            onClick={onClick}
            disabled={disabled}
            className={className}
            type={"submit"}
        />
    )
}

export default Button
