import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, History } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Home from './pages/Home'

// Map to Dispatch
const mapDispatchToProps = dispatch => {
    
}

class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
