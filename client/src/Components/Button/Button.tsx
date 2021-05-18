// Core
import React, { FC, ReactNode } from 'react'

// Styled
import { Container } from './Styled'

// Interface for IProps
interface IProps {
    value?: string
    onClick: any
    disabled?: boolean
    className?: string
    children?: ReactNode
}


const Button: FC<IProps> = ({ value, onClick, disabled = false, className, children }) => {
    return (
        <Container
            value={value}
            onClick={onClick}
            disabled={disabled}
            className={className}
            type={"submit"}
        >{ children }</Container> 
    )
}

export default Button
