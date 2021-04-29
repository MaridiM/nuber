// Core
import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'
import { ToastContainer } from 'react-toastify'

// App
import AppPresenter from './AppPresenter'

// Styled
import 'react-toastify/dist/ReactToastify.min.css'
import { defaultTheme } from './../../@styled'

// Hooks
import { useAuth } from './../../@hooks'

const AppContainer: FC = () => {
    const { isAuth } = useAuth()
    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <AppPresenter isAuth={ isAuth } />
            </ThemeProvider>
            <ToastContainer position={'bottom-center'} draggable />
        </>
    )
}

export default AppContainer