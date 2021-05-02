// Core
import React, { FC } from 'react'

// Local
import PlacePresenter from './PlacePresenter'

// Types
interface IProps {
    address: string
    fav: boolean
    id?: number
    name: string
}

const PlaceContainer: FC<IProps> = ({ address, fav, id, name }) => {
    return (
        <PlacePresenter 
            address={address}
            fav={fav}
            name={name}
            // onStartPress={Mutationfn}
        />
    )
}

export default PlaceContainer
