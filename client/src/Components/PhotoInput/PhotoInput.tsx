// Core
import React, { ChangeEvent, FC, ReactNode } from 'react'

// Components
import { Input } from '..'

// Styled
import { Container, Image } from './Styled'

// Types
interface IProps {
    uploading: boolean
    fileUrl: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    children?: ReactNode
}


const PhotoInput: FC<IProps> = ({ uploading, fileUrl, onChange, children }) => {
    return (
        <Container>
            <Input id={'photo'} type="file" accept='image/*' onChange={onChange} />
            <Image htmlFor={'photo'}>
                { uploading && '⏰'}
                { !uploading 
                    && <img 
                        src={ fileUrl || "https://lh3.googleusercontent.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAUg/8T5nFuIdnHE/photo.jpg" } 
                        alt='user_photo'/>
                } 
            </Image>
        </Container>
    )
}

export default PhotoInput
 