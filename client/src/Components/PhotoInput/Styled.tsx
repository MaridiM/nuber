// Core
import styled from "styled-components"
import Input from "../Input"


export const Container = styled.div``

export const ButtonImage = styled.button`
    width: 100px;
    height: 100px;
    overflow: hidden;
    border: none;
    border-radius: 50%;
    margin: 10px 5px;
    box-shadow: inset 0 0 2px 1px rgba(0, 0, 0, 0.25);
    display: flex;
    align-items: center;
    justify-content: center;
`
    
export const Image = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    & img {
        width: 100px;
        height: 100px;
    }
`

export const UploadInput = styled(Input)`
    display: none;
    &:focus {
        outline: none;
    }
`