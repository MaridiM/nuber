// Core
import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from '@apollo/client'
import 'default-passive-events'

// App
import { App } from './Components'
import { client } from './@init'

// Settings
import reportWebVitals from './reportWebVitals';

// Styled
import { GlobalStyles } from './@styled'



ReactDOM.render(
    <ApolloProvider client={ client }>
        <GlobalStyles />
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
