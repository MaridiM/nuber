// Core
import React, { ChangeEvent, FC, MouseEvent, MutableRefObject } from 'react'
import Sidebar from 'react-sidebar'

// Components
import { AddressBar, Helmet, Menu } from './../../Components'

// Styled
import { Container, ExtendedButton, Map, MenuButton, RequestButton } from './Styled'

// Types
import { GetMyProfileQuery } from './../../@types/api'
interface IProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    loading: boolean
    mapRef: MutableRefObject<any>
    onAddressSubmit: (event: MouseEvent<HTMLButtonElement> ) => void
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    toAddress: string
    price?: string
    data?: GetMyProfileQuery
    nearbyLoading: boolean
}

const HomePresenter: FC<IProps>= ({
    toggleMenu,
    onAddressSubmit,
    onInputChange,
    toAddress,
    price,
    isMenuOpen,
    loading,
    mapRef,
    data: { GetMyProfile: { user = null } = {} } = {},
    nearbyLoading
}) => {
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
                        zIndex: "15"
                    }
                }}
            >
                { !loading && <MenuButton onClick={() => toggleMenu()}>|||</MenuButton> }
                { user && !user.isDriving && (
                    <>
                        <AddressBar 
                            name={'toAddress'}
                            onChange={onInputChange}
                            value={toAddress}
                            onBlur={() => 'Home - AddressBar - onBlur'}
                        />
                        {   
                            !isMenuOpen && 
                                <ExtendedButton 
                                    onClick={onAddressSubmit}
                                    disabled={toAddress === ''}
                                    value={price ? 'Change address' : 'Pick Address'}
                                />
                        }
                    </>
                )}
                { 
                    price && !isMenuOpen && <RequestButton 
                        onClick={() => console.log('Reqiest Button')}
                        disabled={toAddress === ''}
                        value={`Request Ride (${price})`}
                    />
                }  
                <Map ref={mapRef} />
            </Sidebar>
        </Container>
    )
}

export default HomePresenter