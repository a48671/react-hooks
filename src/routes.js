import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalFeed from "./pages/GlobalFeed";
import Article from "./pages/Article";
import Authentication from "./pages/Authentication";

const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={GlobalFeed} exact />
            <Route path='/login' component={Authentication} />
            <Route path='/register' component={Authentication} />
            <Route path='/articles/:alias' component={Article} />
        </Switch>
    );
};

export default Routes;