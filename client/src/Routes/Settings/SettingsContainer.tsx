// Core
import React, { FC } from 'react'

// Hooks
import { useAuth, usePlaces, useProfile } from './../../@hooks'

// Local
import SettingsPresenter from './SettingsPresenter'

// Types
interface IProps {}

// GraphQL

const SettingsContainer: FC<IProps> = () => {
    const { logout } = useAuth()
    const { placesData, placesLoading } = usePlaces()
    const { 
        userData, 
        userDataLoading 
    } = useProfile()

    return <SettingsPresenter 
        placesData={placesData} 
        placesLoading={placesLoading} 
        userData={userData} 
        userDataLoading={userDataLoading} 
        logout={logout} 
    />
}

export default SettingsContainer
