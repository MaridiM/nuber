// Core
import React, { ChangeEvent, FC, MouseEvent, MutableRefObject } from 'react'
import Sidebar from 'react-sidebar'
import { MutationFunction } from '@apollo/client'

// Components
import { AddressBar, Helmet, Menu } from './../../Components'

// Styled
import { Container, ExtendedButton, Map, MenuButton, RequestButton } from './Styled'

// Types
import { 
    GetMyProfileQuery, 
    RequestRideMutation, 
    RequestRideMutationVariables 
} from './../../@types/api'
interface IProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    loading: boolean
    mapRef: MutableRefObject<any>
    onAddressSubmit: (event: MouseEvent<HTMLButtonElement> ) => void
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
    onBlur: () => void
    toAddress: string
    price?: string
    data?: GetMyProfileQuery
    _requestRide: MutationFunction<RequestRideMutation, RequestRideMutationVariables>
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
    onBlur,
    _requestRide
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
                            onBlur={onBlur}
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
                        onClick={_requestRide}
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