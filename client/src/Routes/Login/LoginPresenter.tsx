// Core
import React, { FC } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

// Styled
import {
    Container,
    FakeInput,
    Footer,
    Grey,
    Header,
    Logo,
    PhoneLogin,
    SocialLink,
    SocialLogin,
    Subtitle,
    Title
} from './Styled'

// Utils
import { paths } from './../../@utils'

// Type for Props
export interface IProps extends RouteComponentProps<any> {}


const OutHomePresenter: FC<IProps> = () => (
    <Container>
        <Helmet>
            <title>Login | (N) Uber</title>
        </Helmet>
        <Header>
            <Logo>
                <Title>(N)Uber</Title>
            </Logo>
        </Header>

        <Footer>
            <Link to={paths.phoneLogin}>
                <PhoneLogin>
                    <Subtitle>Get moving with (N) Uber</Subtitle> 
                    <FakeInput>
                        🇺🇦 +380 <Grey>Enter your mobile number</Grey>
                    </FakeInput>
                </PhoneLogin>
            </Link>
            <Link to={paths.socialLogin}>
                <SocialLogin>
                    <SocialLink>Or connect with social network</SocialLink>
                </SocialLogin>
            </Link>
        </Footer>
    </Container>
)

export default OutHomePresenter
