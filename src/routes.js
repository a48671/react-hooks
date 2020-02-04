import React from 'react';
import { Route, Switch } from 'react-router';

import GlobalFeed from "./pages/GlobalFeed";
import Article from "./pages/Article";

export default () => {
    return(
        <Switch>
            <Route path='/' render={GlobalFeed} exact />
            <Route path='/articles/:alias' render={Article} />
        </Switch>
    );
};
