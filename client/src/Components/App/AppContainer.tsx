// Core
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { loader } from 'graphql.macro'
import { useQuery } from '@apollo/client'

// App
import AppPresenter from './AppPresenter'

// Styled
import { defaultTheme } from './../../@styled'

// QUERIES
const QUERY_IS_LOGGED_IN = loader('./AppQueries.graphql')

const AppContainer: FC = () => {
    const { data } = useQuery(QUERY_IS_LOGGED_IN)

    return (
        <ThemeProvider theme={defaultTheme}>
            <AppPresenter isLoggedIn={ data.isLoggedIn } />
        </ThemeProvider>
    )
}

export default AppContainer