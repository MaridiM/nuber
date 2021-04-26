// Core
import React, { FC } from 'react'
import Helmet from 'react-helmet'

// Interface for IProps
interface IProps {
    title: string
}


const HelmetComponent: FC<IProps> = ({ title }) => {
    return (
        <Helmet>
            <title>{ title } | (N)Uber</title>
        </Helmet>
    )
}

export default HelmetComponent
