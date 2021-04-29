// Core
import styled from "styled-components"

// Components
import Button from "./../../Components/Button"


export const Container = styled.div``

export const MenuButton = styled.button`
    appearance: none;
    padding: 10px;
    position: absolute;
    top: 10px;
    left: 10px;
    text-align: center;
    font-weight: 800;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    transform: rotate(90deg);
    z-index: 2;
    background-color: transparent;
`

export const Map = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
`

export const ExtendedButton = styled(Button)`
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    height: auto;
    width: 80%;
`

export const RequestButton = `
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 10;
    height: auto;
    width: 80%;
    bottom: 250px;
`