// Core
import React, { ChangeEvent, FC, FormEvent } from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'


// Components
import { Input } from "../../Components"


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
}


const PhoneLoginPresenter: FC<IProps> = ({ 
    countryCode,
    phoneNumber,
    onInputChange,
    onSubmit
}) => {
    return (
        <Container>
            <Helmet>
                <title>Phone Login | (N) Uber</title>
            </Helmet>
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
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='white'
                    >
                        <path d='M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z' />
                    </svg>
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
