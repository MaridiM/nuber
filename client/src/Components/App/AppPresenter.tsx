// Core
import React, { FC } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Routes
import { 
    AddPlace,
    EditAccount,
    FindAddress,
    Home,
    Login,
    PhoneLogin,
    Places,
    Ride,
    Settings, 
    SocialLogin,
    VerifyPhone
} from './../../Routes'

// Utils
import { paths } from './../../@utils'

export interface IProps {
    isAuth: boolean
}
 
const AppPresenter: FC<IProps> = ({ isAuth }) => <Router>{ isAuth ? <LoggedInRoutes /> : <LoggedOutRoutes /> }</Router>

const LoggedOutRoutes: FC = () => (
    <Switch>
        <Route exact path={paths.home} component={ Login } />
        <Route path={paths.phoneLogin} component={ PhoneLogin } />
        <Route path={paths.verifyPhone} component={ VerifyPhone } />
        <Route path={paths.socialLogin} component={ SocialLogin } />
        <Redirect from='*' to={paths.home} />

    </Switch>
)

const LoggedInRoutes: FC = () => (
    <Switch>
        <Route exact path={paths.home} component={ Home } />
        <Route exact path={paths.ride()} component={ Ride } />
        <Route exact path={paths.editAccount} component={ EditAccount } />
        <Route exact path={paths.settings} component={ Settings } />
        <Route exact path={paths.places} component={ Places } />
        <Route exact path={paths.addPlace} component={ AddPlace } />
        <Route exact path={paths.findAddress} component={ FindAddress } />
        <Redirect from='*' to={paths.home} />
    </Switch>
)


AppPresenter.propTypes = {
    isAuth: PropTypes.bool.isRequired
}

export default AppPresenter