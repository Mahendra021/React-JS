import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Detail from './Component/View/Detail';
import Singin from './Component/View/Singin';
import Job from './Component/View/Job';

var history = createBrowserHistory();

export class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={() => <Singin /> } />
                    <Route exact path="/job" component={() => <Job /> } />
                    <Route exact path="/detail" component={() => <Detail /> } />
                </Switch>
            </Router>
        )
    }
}

export default Routes
