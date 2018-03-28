import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect, History } from 'react-router-dom';
import { connect } from 'react-redux';
import $ from 'jquery';

// Components
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Game from './pages/Game'
import Admin from './pages/Admin'
import Perola from './pages/Perola'
import Highscores from './pages/Highscores'

const mapStateToProps = state => {
    return {
        user: state.loginStore.user
    }
}


class Routes extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/dashboard" component={Dashboard}/>
                    <Route path="/game" component={Game}/>
                    <Route path="/admin" component={Admin}/>
                    <Route path="/nova-perola" component={Perola}/>
                    <Route path="/highscores" component={Highscores}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default connect(mapStateToProps)(Routes);
