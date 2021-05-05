// Core
import styled from "styled-components"

// Components
import Button from "./../../Components/Button"

export const Map = styled.div  `
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%; 
`

export const Center = styled.div  `
    position: absolute;
    height: 40px;
    width: 40px;
    z-index: 1;
    font-size: 30px;
    margin: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
`;