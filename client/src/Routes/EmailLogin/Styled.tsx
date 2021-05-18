// Core
import styled from "styled-components"
import { Link } from "react-router-dom"

// Components
import Input from "./../../Components/Input"
import BackArrow from './../../Components/BackArrow'

export const Container = styled.div`
    margin-top: 30px;
    padding: 50px 20px;
`

export const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`

export const Title = styled.h2`
    font-size: 25px;
    margin-bottom: 40px;
`
export const Form = styled.form``

export const ExtendedInput = styled(Input)`
    margin-top: 15px;
`

export const SLink = styled(Link)`
    display: block;
    margin-top: 25px;
    font-size: 18px;
    text-decoration: underline;
`

export const Button = styled.button`
    box-shadow: 0 18px 35px rgba(50, 50, 93, 0.1), 0 8px 15px rgba(0, 0, 0, 0.07);
    background-color: black;
    color: white;
    padding: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
`