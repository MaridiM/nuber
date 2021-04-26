// Core
import React, { FC, ReactNode } from 'react'

// Interface for IProps
interface IProps {
    onSubmit: () => void 
    className?: string
    children: ReactNode
}


const Form: FC<IProps> = ({ onSubmit, className, children }) => {
    return (
        <form
            className={className}
            onSubmit={ e => {
                e.preventDefault()
                onSubmit()
            }}
        >
            { children } 
        </form>
    )
}

export default Form
