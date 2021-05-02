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
    const { userDataLoading } = useProfile()
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return <HomePresenter 
        loading={userDataLoading}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen}

    />
}

export default HomeContainer
