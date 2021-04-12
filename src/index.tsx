import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, HashRouter} from "react-router-dom";
import {Provider} from 'react-redux'

/* BLL */
import {store} from "./App/store";

/* Components*/
import App from './App/App';

/* Style */
import './index.module.scss';

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App/>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
