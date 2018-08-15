import React from 'react';
import { Route } from "react-router-dom";
import Posting from '../Posting';
import Search from '../Search';
import * as routes from '../constants';


function Routes() {
    return (
        <div>
       
        <Route exact path={routes.SEARCH} component={() => <Search />}/>
        </div>
    )
}

export default Routes;
