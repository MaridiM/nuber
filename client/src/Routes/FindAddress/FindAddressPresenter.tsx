// Core
import React, { ChangeEvent, FC, MouseEvent, MutableRefObject } from 'react'

// Components
import { AddressBar, Helmet } from './../../Components'

// Styled
import { Center, ExtendedButton, Map } from './Styled'

// Types
interface IProps {
    mapRef: MutableRefObject<any>
    onBlur: () => void
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
    address: string
}

const FindAddressPresenter: FC<IProps> = ({ mapRef, onBlur, onChange, onClick, address }) => {
    return (
        <div>
            <Helmet title={'Find Address'} />
            <AddressBar 
                onBlur={onBlur}
                onChange={onChange}
                name={'address'}
                value={address}
            />
            <ExtendedButton value={"Pick this place"} onClick={onClick} />
            <Center>📍</Center>
            <Map ref={mapRef} />
        </div>
    )
}

export default FindAddressPresenter
