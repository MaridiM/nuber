// Core
import React, { FC } from 'react'
import { Link } from 'react-router-dom'

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
interface IProps {

}

const MenuPresenter: FC<IProps> = ({}) => { 
    return (
        <Container>
            <Header>
                <Grid>
                    <Link to={paths.editAccount}>
                        <Image
                            src={
                                "https://lh3.googleusercontent.com/-CTwXMuZRaWw/AAAAAAAAAAI/AAAAAAAAAUg/8T5nFuIdnHE/photo.jpg"
                            }
                        />
                    </Link>
                    <Text>
                        <Name>Dmitriy Marynenko</Name>
                        <Rating>4.5</Rating>
                    </Text>
                </Grid>
            </Header>
            <SLink to={paths.trips}>Your trips</SLink>
            <SLink to={paths.settings}>Settings</SLink>
            <ToggleDriving isDriving={true}>{ true ? 'Stop driving' : 'Start driving' }</ToggleDriving>
        </Container>
    )
}

export default MenuPresenter