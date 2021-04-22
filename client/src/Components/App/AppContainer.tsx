// Core
import React, { FC } from 'react'
import { useQuery } from '@apollo/client'
import { loader } from 'graphql.macro'

// App
import AppPresenter from './AppPresenter'

const QUERY_IS_LOGGED_IN = loader('./AppQueries.graphql')


const AppContainer: FC = () => {
    const { data } = useQuery(QUERY_IS_LOGGED_IN)
    return (
        <AppPresenter isLoggedIn={ data.isLoggedIn } />
    )
}

export default AppContainer