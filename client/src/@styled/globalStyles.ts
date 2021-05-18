// Core
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset'

export const GlobalStyles = createGlobalStyle `
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        font-family: "Segoe UI",Roboto,Arial,sans-serif;
        width: 100%;
        height: 100vh;
    }
    a { 
        color: inherit;
        text-decoration: none;
    }
    input,
    button {
        &:focus,&:active{
            outline: none;
        }
    }
` 