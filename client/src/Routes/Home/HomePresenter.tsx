// Core
import React, { FC, MutableRefObject } from 'react'
import Sidebar from 'react-sidebar'

// Components
import { Helmet, Menu } from './../../Components'

// Styled
import { Container, Map, MenuButton } from './Styled'

// Types
interface IProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    loading: boolean
    mapRef: MutableRefObject<any>
}

const HomePresenter: FC<IProps>= ({ toggleMenu, isMenuOpen, loading, mapRef }) => {
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
                <Map ref={mapRef} />
            </Sidebar>
        </Container>
    )
}

export default HomePresenter