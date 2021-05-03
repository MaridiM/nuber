// Core
import { Link } from "react-router-dom"
import styled from "styled-components"

// Components
import Input from "./../../Components/Input"

export const Container = styled.div `
    padding: 0 40px;
`
export const ExtendedInput = styled(Input) `
    margin-bottom: 40px;
`

export const ExtendedLink = styled(Link) `
    padding-bottom: 20px;
    display: block;
    text-decoration: underline;
`