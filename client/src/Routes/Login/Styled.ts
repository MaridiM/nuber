// Core
import styled from "styled-components"

// Assets
import bgImage from "../../assets/bg.png"

/**
 * 
 * STYLES
 * 
 */

export const Container = styled.div`
  height: 100vh;
`

export const Header = styled.header`
  height: 70%;
  background: linear-gradient(rgba(0, 153, 196, 0.5), rgba(0, 153, 196, 0.4)),
    url(${bgImage});
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  width: 125px;
  height: 125px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 -14px 28px rgba(0, 0, 0, 0.22);
  text-transform: uppercase;
  font-weight: 500;
  font-size: 25px;
`

export const Title = styled.h1 `
  
`

export const Footer = styled.div ``

export const Subtitle = styled.h2 `
    font-size: 30px;
`

export const FakeInput = styled.div `
    margin: 50px 0px;
    font-size: 25px;
    font-weight: 300;
`

export const PhoneLogin = styled.div `
    padding: 20px;
    cursor: pointer;
`

export const Grey = styled.span `
    color: ${props => props.theme.greyColor};
    margin-left: 10px;
`

export const SocialLogin = styled.div `
    border-top: 1px solid ${props => props.theme.greyColor};
    padding: 30px 20px;
`

export const SocialLink = styled.span `
    color: ${props => props.theme.blueColor};
    font-size: 20px;
    cursor: pointer;
`