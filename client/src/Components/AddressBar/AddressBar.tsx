// Core
import React, { ChangeEvent, FC } from 'react'
import { Container } from './Styled'

// Types
interface IProps {
    value: string
    onBlur: () => void
    name: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const AddressBar: FC<IProps> = ({ value, onBlur, onChange, name }) => {
    return <Container 
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            placeholder={'Type address'}
            name={name}
        />
}

export default AddressBar
