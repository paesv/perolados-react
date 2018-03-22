import React from 'react';
import ReactDOM from 'react-dom';

// App Base Config
import { Provider } from "react-redux"
import store from './store'
import Routes from './routes';

// App Base Imports
import 'bootstrap/dist/css/bootstrap.css'
import './assets/globals/globals.scss'

ReactDOM.render(
    <Provider store={store}>
        <Routes/>
    </Provider>,
    document.getElementById("app")
);
