// Core
import React, { ChangeEvent, FC } from 'react'

// Utils
import { paths } from './../../@utils'

// Components
import { Helmet } from './../../Components'

// Styled
import { 
    Container, 
    BackArrowExtended,
    Title,
    Form,
    Button,
    ExtendedInput,
    SLink
} from './Styled'

// Types
interface IProps {
    loading: boolean
    onSubmit: any
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    email: string
    password: string
}

const EmailLoginPresenter: FC<IProps> = ({ 
    loading,
    onSubmit,
    onInputChange,
    email,
    password,
}) => {
    return (
        <Container>
            <Helmet title={'Email Login'} />
            <BackArrowExtended backTo={paths.home} />
            <Title>Sign Up by Email</Title>

            <Form onSubmit={onSubmit}>

              
                <ExtendedInput
                    placeholder='Email'
                    type="email"
                    value={email}
                    name={'email'}
                    onChange={onInputChange}
                    required={true}
                />

                <ExtendedInput
                    placeholder='Password'
                    type="password"
                    value={password}
                    name={'password'}
                    onChange={onInputChange}
                    required={true}
                    autocomplete={'off'}
                />

                <SLink to={paths.phoneLogin}>Sign Up</SLink>

                <Button>
                    {loading ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={"white"}
                        >
                            <path d="M13.75 22c0 .966-.783 1.75-1.75 1.75s-1.75-.784-1.75-1.75.783-1.75 1.75-1.75 1.75.784 1.75 1.75zm-1.75-22c-1.104 0-2 .896-2 2s.896 2 2 2 2-.896 2-2-.896-2-2-2zm10 10.75c.689 0 1.249.561 1.249 1.25 0 .69-.56 1.25-1.249 1.25-.69 0-1.249-.559-1.249-1.25 0-.689.559-1.25 1.249-1.25zm-22 1.25c0 1.105.896 2 2 2s2-.895 2-2c0-1.104-.896-2-2-2s-2 .896-2 2zm19-8c.551 0 1 .449 1 1 0 .553-.449 1.002-1 1-.551 0-1-.447-1-.998 0-.553.449-1.002 1-1.002zm0 13.5c.828 0 1.5.672 1.5 1.5s-.672 1.501-1.502 1.5c-.826 0-1.498-.671-1.498-1.499 0-.829.672-1.501 1.5-1.501zm-14-14.5c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2zm0 14c1.104 0 2 .896 2 2s-.896 2-2.001 2c-1.103 0-1.999-.895-1.999-2s.896-2 2-2z" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={"white"}
                        >
                            <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
                        </svg>
                    )}
                </Button>
            </Form>

        </Container>
    )
}

export default EmailLoginPresenter
