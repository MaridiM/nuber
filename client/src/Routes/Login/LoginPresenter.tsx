// Core
import React, { FC } from 'react'
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

// Components
import { Helmet } from './../../Components'

// Type for Props
export interface IProps extends RouteComponentProps<any> {}


const OutHomePresenter: FC<IProps> = () => (
    <Container>
        <Helmet title={'Login'} />
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
            <Link to={paths.emailLogin}>
                <SocialLogin>
                    <SocialLink>Enter by email</SocialLink>
                </SocialLogin>
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
