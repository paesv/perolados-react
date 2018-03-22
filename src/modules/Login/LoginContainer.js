import React, { Component } from 'react';
import { connect } from 'react-redux';

// Import Actions
import { loginRequest } from './LoginActions'
import { login } from './LoginActions'

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: () => dispatch(loginRequest()),
    }
}

const mapStateToProps = state => {
    return {
        user: state.loginStore.user
    }
}

class LoginContainer extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (
            <div className="text-center">
                <div>Perolados</div>
                
                <button className="btn btn-primary" onClick={this.props.loginRequest}>
                Fazer login com Google
                </button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
