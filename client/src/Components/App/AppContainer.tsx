// Core
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'
import { useQuery } from '@apollo/client'

// App
import AppPresenter from './AppPresenter'

// Styled
import 'react-toastify/dist/ReactToastify.min.css'
import { defaultTheme } from './../../@styled'

// QUERIES
import{ QUERY_IS_LOGGED_IN } from './App.queries'

const AppContainer: FC = () => {
    const { data } = useQuery(QUERY_IS_LOGGED_IN)

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <AppPresenter isLoggedIn={ data.isLoggedIn } />
            </ThemeProvider>
            <ToastContainer position={'bottom-center'} draggable />
        </>
    )
}

export default AppContainer