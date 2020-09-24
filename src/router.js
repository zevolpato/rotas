import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import QuemSomos from './pages/QuemSomos';

export default function Routes() {
    return(

        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home} />
                <Route path="/portfolio"  component={Portfolio} />
                <Route path="/quemsomos"  component={QuemSomos} />
                
            </Switch>
        </BrowserRouter>
    );
}