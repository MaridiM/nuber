// Core
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
// import { MutationFunction } from '@apollo/client'

// Utils
import { paths } from './../../@utils'

// Styled
import {
    Container,
    Header,
    SLink,
    Grid,
    Image,
    Text,
    Name,
    Rating,
    ToggleDriving
} from './Styled'

// Types
import {
    GetMyProfileQuery,
    // ToggleDrivingMutation
} from './../../@types/api'
interface IProps {
    data?: GetMyProfileQuery
    loading: boolean
    // toggleDriving: MutationFunction<ToggleDrivingMutation, any>
    toggleDriving: any
}

const MenuPresenter: FC<IProps> = ({ 
    data: {GetMyProfile: { user = {} } = {} } = {}, 
    loading,
    toggleDriving
}) => { 
    return (
        <Container>
            { !loading && 
                user && 
                user.fullName &&
                <>
                    <Header>
                        <Grid>
                            <Link to={paths.editAccount}>
                                <Image
                                    src={
                                        user.profilePhoto || 
                                        "https://lh3.googleusercontent.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAUg/8T5nFuIdnHE/photo.jpg"
                                    }
                                />
                            </Link>
                            <Text>
                                <Name>{ user.fullName }</Name>
                                <Rating>4.5</Rating>
                            </Text>
                        </Grid>
                    </Header>
                    <SLink to={paths.trips}>Your trips</SLink>
                    <SLink to={paths.settings}>Settings</SLink>
                    <ToggleDriving 
                        isDriving={user.isDriving!}
                        onClick={toggleDriving}
                    >
                        { user.isDriving ? 'Stop driving' : 'Start driving' }
                    </ToggleDriving>
                </>
            }
        </Container>
    )
}

export default MenuPresenter