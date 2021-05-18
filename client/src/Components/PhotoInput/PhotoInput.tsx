// Core
import React, { ChangeEvent, FC, MouseEventHandler, useRef } from 'react'

// Styled
import { ButtonImage, Container, Image, UploadInput } from './Styled'

// Types
interface IProps {
    uploading: boolean
    fileUrl: string
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    required?: boolean
}

const PhotoInput: FC<IProps> = ({ uploading, fileUrl, onChange, required}) => {
    const uploadInputRef = useRef<HTMLInputElement>()

    const uploadHandleInput: MouseEventHandler<HTMLButtonElement> = event => {
        event.preventDefault()
        return uploadInputRef.current?.click()
    }

    return (
        <Container>
            <UploadInput 
                id={'photo'} 
                type="file" 
                accept='image/*' 
                onChange={onChange} 
                uploadInputRef={uploadInputRef} 
                required={required}
            />
            <ButtonImage onClick={uploadHandleInput}>
                <Image>
                    { uploading && '⏰'}
                    { !uploading 
                        && <img 
                            src={ fileUrl || "https://lh3.googleusercontent.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAUg/8T5nFuIdnHE/photo.jpg" } 
                            alt='user_photo'/>
                    } 
                </Image>
            </ButtonImage>
        </Container>
    )
}

export default PhotoInput
 