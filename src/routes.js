import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalFeed from "./pages/GlobalFeed";
import TagFeed from "./pages/TagFeed";
import Article from "./pages/Article";
import Authentication from "./pages/Authentication";

const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={GlobalFeed} exact />
            <Route path='/tags/:tag' component={TagFeed} />
            <Route path='/login' component={Authentication} />
            <Route path='/register' component={Authentication} />
            <Route path='/articles/:alias' component={Article} />
        </Switch>
    );
};

export default Routes;