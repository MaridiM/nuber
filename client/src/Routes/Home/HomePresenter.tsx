// Core
import React, { FC, ReactNode } from 'react'
import Sidebar from 'react-sidebar'

// Components
import { Helmet, Menu } from './../../Components'

// Styled
import { Container } from './Styled'

// Types
interface IProps {
    toggleMenu: () => void
    isMenuOpen: boolean
    loading: boolean
    children?: ReactNode
}

const HomePresenter: FC<IProps>= ({ toggleMenu, isMenuOpen, loading, children }) => {
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
                <button onClick={() => toggleMenu()}>Open sidebar</button>
            </Sidebar>
        </Container>
    )
}

export default HomePresenter