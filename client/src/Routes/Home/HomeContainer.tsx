// Core
import React, { FC, useState } from 'react'

// Local
import HomePresenter from './HomePresenter'

// Hooks
import { useProfile } from './../../@hooks'

// Types
interface IProps {}



const HomeContainer: FC<IProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    // Query
    const { loading } = useProfile()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return <HomePresenter 
        loading={loading}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen}

    />
}

export default HomeContainer
