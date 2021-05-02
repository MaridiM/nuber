// Core
import React, { FC } from 'react'

// Utils
import { paths } from './../../@utils'

// Components
import { Header, Helmet, Place } from './../../Components'

// Styled
import { Container, FakeLink, GridLink, Image, Key, Keys, SLink } from './Styled'

// Types
import { GetMyPlacesQuery, GetMyProfileQuery } from './../../@types/api'

interface IProps {
    logout: () => void
    userData?: GetMyProfileQuery
    placesData?: GetMyPlacesQuery 
    userDataLoading: boolean
    placesLoading: boolean
}

const SettingsPresenter: FC<IProps> = ({ logout, placesData, placesLoading, userData, userDataLoading }) => {
    const places = placesData?.GetMyPlaces.places || []
    const user = userData?.GetMyProfile.user

    return (
        <>
            <Helmet title={'Settings'} /> 
            <Header title={'Account Settings'} backTo={paths.home} />
            <Container>
                <GridLink to={paths.editAccount}>
                    {
                        !userDataLoading && userData &&  (
                            <>
                                <Image src={user!.profilePhoto || 'https://gp2dzm.ru/wp-content/uploads/2018/11/no-photo-male.jpg' } alt='Avatar' />
                                <Keys>
                                    <Key>Dmitriy</Key>
                                    <Key>maridim.dev@gmail.com</Key>
                                </Keys>
                            </>
                        )
                    }
                </GridLink>
                { places.length >= 1  && <hr /> }
                {
                    !placesLoading && places && places.map( (state, idx) => (
                        <Place 
                            key={idx} 
                            fav={state!.isFav} 
                            name={state!.name} 
                            address={state!.address} />

                    ))
                }
                <hr />
                <SLink to={paths.places}>Go to Places</SLink>
                <FakeLink onClick={logout}>Log Out</FakeLink>
            </Container>  
        </>
    )
}

export default SettingsPresenter
