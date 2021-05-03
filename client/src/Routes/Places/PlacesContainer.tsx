// Core
import React, { FC } from 'react'

// Hooks
import { usePlaces } from './../../@hooks'

// Local
import PlacesPresenter from './PlacesPresenter'

// Types
interface IProps  {}


const PlacesContainer: FC<IProps> = () => {
    const { placesData, placesLoading } = usePlaces()

    return <PlacesPresenter 
        placesData={placesData} 
        placesLoading={placesLoading}
        />
}

export default PlacesContainer
