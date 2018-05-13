import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import {Main} from "./main";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


const render = (Component: any) => {
    ReactDOM.render(
            <AppContainer>
                <Component />
            </AppContainer>,

        document.getElementById("hook")
    );
}

render(Main);


if ((module as any).hot) {
    (module as any).hot.accept('./main', () => { render(require('./main').default) })
}