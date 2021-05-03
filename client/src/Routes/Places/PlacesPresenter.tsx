// Core
import React, { FC } from 'react'

// Utils
import { paths } from './../../@utils'

// Components
import { Header, Helmet, Place } from './../../Components'

// Styles
import { Container, SLink, InfoText } from './Styled'

// Types
import { GetMyPlacesQuery } from './../../@types/api'

interface IProps {
    placesData?: GetMyPlacesQuery
    placesLoading: boolean
}

const PlacesPresenter: FC<IProps> = ({placesData, placesLoading}) => {
    const places = placesData?.GetMyPlaces.places || []
    return (
        <>
            <Helmet title={'Places'} />
            <Header title={'Places'} backTo={paths.home} />   
            <Container>
                { !placesLoading 
                    && places 
                    && !places.length 
                    && <InfoText>You have no places</InfoText>
                }
                { 
                    !placesLoading 
                    && places 
                    && places.map((place, idx) => (
                        <Place 
                            key={idx}
                            id={place!.id}
                            fav={place!.isFav}
                            name={place!.name}
                            address={place!.address}
                            />
                    ))
                }
                <SLink to={paths.addPlace} >Add some place</SLink>
            </Container>
        </>
    )
}

export default PlacesPresenter
