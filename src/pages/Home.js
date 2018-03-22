import React, { Component } from 'react';

import LoginContainer from '../modules/Login/LoginContainer'
import Header from '../modules/common/Header/containers/HeaderContainer'

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <LoginContainer/>
            </div>
        );
    }
}

export default Home;
