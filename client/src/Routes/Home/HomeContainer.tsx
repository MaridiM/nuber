// Core
import React, { FC, useState } from 'react'
import { loader } from 'graphql.macro'

// Local
import HomePresenter from './HomePresenter'
import { useQuery } from '@apollo/client'

// Types
import { GetMyProfileQuery } from './../../@types/api'

interface IProps {}

// GraphQL
const QUERY_GET_MY_PROFILE = loader('./Home.graphql')


const HomeContainer: FC<IProps> = () => {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    // Query
    const { data, loading } = useQuery<GetMyProfileQuery>(QUERY_GET_MY_PROFILE)
    console.log({ data, loading })

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return <HomePresenter 
        loading={loading}
        toggleMenu={toggleMenu} 
        isMenuOpen={isMenuOpen}

    />
}

export default HomeContainer
