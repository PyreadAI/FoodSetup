import * as React from 'react';
import { MainPage } from './MainPageContainer';
import { Menu } from './MenuContainer';
import { BrowserRouter as Router, Route, IndexRoute, hashHistory, Switch, browserHistory, Redirect } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute'
export interface IMG {
    src: string,
    description: string,
    title: string,
    recipe: string,
    price: string
}

import axios from 'axios';

interface UI {
    log: boolean,
    identity: string,
    id: number
}
export interface TypedInput {
    type: string,
    name: any
}
export interface Info {
    user: string,
    pw: string
}
export class Main extends React.Component<undefined, any> {
    constructor() {
        super();
    }
    //if loggedin direct to mainpage with loggedin props, else redirect to mainpage

    render() {
          

        return <Router history={browserHistory}>
            <Switch>

                {/* <PrivateRoute exact path="/"  component={MainPage}/> */}
                <Route exact path="/" render={(props) => (
                    localStorage.getItem('user') ? <Redirect to="/login" component={MainPage} />
                        : <MainPage />
                )} />
                {/* <Route exact path="/" component={MainPage} /> */}
                <Route path="/menu" component={Menu} />
                <Route to="/login" component={MainPage} />
            </Switch>
        </Router>

    }
}