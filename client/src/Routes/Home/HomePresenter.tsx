// Core
import React, { ChangeEvent, FC, MouseEvent, MutableRefObject } from 'react'
import Sidebar from 'react-sidebar'

// Components
import { AddressBar, Helmet, Menu } from './../../Components'

// Styled
import { Container, ExtendedButton, Map, MenuButton } from './Styled'

// Types
interface IProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    loading: boolean
    mapRef: MutableRefObject<any>
    onAddressSubmit: (event: MouseEvent<HTMLButtonElement> ) => void
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    toAddress: string
    price?: number
}

const HomePresenter: FC<IProps>= ({ toggleMenu, onAddressSubmit, onInputChange, toAddress, price, isMenuOpen, loading, mapRef }) => {
    return (
        <Container>
            <Helmet title="Home" />
             <Sidebar
                sidebar={<Menu />}
                open={isMenuOpen}
                onSetOpen={toggleMenu}
                styles={{
                    sidebar: {
                        backgroundColor: "white",
                        width: "80%",
                        zIndex: "10"
                    }
                }}
            >
                { !loading && <MenuButton onClick={() => toggleMenu()}>|||</MenuButton> }
                <>
                    <AddressBar 
                        name={'toAddress'}
                        onChange={onInputChange}
                        value={toAddress}
                        onBlur={() => 'Home - AddressBar - onBlur'}
                    />
                    <ExtendedButton 
                        onClick={onAddressSubmit}
                        disabled={toAddress === ''}
                        value={price ? 'Change address' : 'Pick Address'}
                    />
                </>
                <Map ref={mapRef} />
            </Sidebar>
        </Container>
    )
}

export default HomePresenter