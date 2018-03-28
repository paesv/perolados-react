import React, { Component } from 'react';

import LoginContainer from '../modules/Login/LoginContainer'
import Header from '../modules/common/Header/containers/HeaderContainer'

import { connect } from 'react-redux'
import { getDomainData } from '../modules/common/Config/ConfigActions'

const mapDispatchToProps = dispatch => {
    return {
        getDomainData: () => dispatch(getDomainData())
    }
}

class Home extends Component {
    componentDidMount() {
        this.props.getDomainData()
    }

    render() {
        return (
            <div>
                <Header/>
                <LoginContainer router={this.props.history}/>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(Home);
