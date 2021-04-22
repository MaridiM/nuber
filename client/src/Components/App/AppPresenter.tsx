// Core
import React, { FC } from 'react'
import PropTypes from 'prop-types'

export interface IProps {
    isLoggedIn: boolean
}
 
const AppPresenter: FC<IProps> = ({ isLoggedIn }) => 
    isLoggedIn ? <span>You are in</span> : <span>You are out</span>


AppPresenter.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

export default AppPresenter