// Core
import React, { ChangeEvent, FC, FormEvent } from 'react'
import PropTypes from 'prop-types'


// Components
import { Helmet, Input } from "../../Components"


// Data
import { countries } from "../../@utils";

// Styled
import {
    BackArrowExtended,
    Button,
    Container,
    CountrySelect,
    Form,
    Title,
    CountryOption,
} from './Styled';

// Interface for IProps
interface IProps { 
    countryCode: string
    phoneNumber: string
    onInputChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void
    onSubmit: (event: FormEvent<HTMLFormElement>) => void
    loading: boolean
}


const PhoneLoginPresenter: FC<IProps> = ({ 
    countryCode,
    phoneNumber,
    onInputChange,
    onSubmit,
    loading
}) => {
    return (
        <Container>
            <Helmet title={'Phone Login'} />
            <BackArrowExtended backTo='/' />
            <Title>Enter your mobile number</Title>
            <CountrySelect value={countryCode} name={'countryCode'} onChange={onInputChange}>
                {
                    countries && countries.map((country, idx): JSX.Element => (
                        <CountryOption key={idx} value={country.dial_code} >
                            {country.flag} {country.name} ({country.dial_code})
                        </CountryOption>
                    ))
                }
            </CountrySelect>

            <Form onSubmit={onSubmit}>
                <Input
                    placeholder='053 690 2129'
                    value={phoneNumber}
                    name={'phoneNumber'}
                    onChange={onInputChange}
                />
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
    );
}

PhoneLoginPresenter.propTypes = {
    countryCode: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
}

export default PhoneLoginPresenter
