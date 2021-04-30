// Core
import styled from "styled-components"

export const Container = styled.div``

export const Image = styled.label`
    cursor: pointer;
    height: 80px;
    width: 80px;
    border: 2px solid black;
    display: block;
    border-radius: 50%;
    margin-bottom: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    overflow: hidden;
    & img {
        width: 80px;
        height: 80px;
    }
`

export const Input = styled.input`
    color: white;
    opacity: 0;
    height: 1px;
    &:focus {
        outline: none;
    }
`