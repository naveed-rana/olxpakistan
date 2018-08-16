import React from 'react';
import { Route,Switch } from "react-router-dom";
import Posting from '../Posting';
import Search from '../Search';
import * as routes from '../constants';
import Login from '../Login';
import SignUp from '../SignUp';
import Home from '../Home';


function Routes() {
    return (
        <div>
        <Switch>
        <Route exact path={routes.POSTING} component={() => <Posting />}/>
        <Route exact path={routes.SEARCH} component={() => <Search />}/>
        <Route exact path={routes.LOGIN} component={() => <Login />}/>
        <Route exact path={routes.SIGNUP} component={() => <SignUp />}/>
        <Route exact path={routes.HOME} component={() => <Home />}/>
        </Switch>
        </div>
    )
}

export default Routes;
