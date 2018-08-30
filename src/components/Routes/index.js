import React from 'react';
import { Route,Switch } from "react-router-dom";
import Posting from '../Posting';
import Search from '../Search';
import * as routes from '../constants';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';
import Account from '../Account';


function Routes() {
    return (
        <div>
        <Switch>
        <Route exact path={routes.POSTING} component={() => <Posting />}/>
        <Route exact path={routes.SEARCH} component={() => <Search />}/>
        <Route exact path={routes.LOGIN} component={() => <Login />}/>
        <Route exact path={routes.SIGNUP} component={() => <SignUp />}/>
        <Route exact path={routes.HOME} component={() => <Home />}/>
        <Route exact path={routes.ACCOUNT} component={() => <Account />}/>
        <Route exact path={routes.SETTINGS} component={() => <Account />}/>
        <Route exact path={routes.SAVEDADS} component={() => <Account />}/>
        <Route exact path={routes.MYADS} component={() => <Account />}/>
        </Switch>
        </div>
    )
}

export default Routes;
