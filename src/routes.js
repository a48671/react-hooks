import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GlobalFeed from "./pages/GlobalFeed";
import TagFeed from "./pages/TagFeed";
import Article from "./pages/Article/index.tsx";
import Authentication from "./pages/Authentication";
import YourFeed from "./pages/YourFeed";

const Routes = () => {
    return(
        <Switch>
            <Route path='/' component={GlobalFeed} exact />
            <Route path='/feed' component={YourFeed} />
            <Route path='/tags/:tag' component={TagFeed} />
            <Route path='/login' component={Authentication} />
            <Route path='/register' component={Authentication} />
            <Route path='/articles/:slug' component={Article} />
        </Switch>
    );
};

export default Routes;