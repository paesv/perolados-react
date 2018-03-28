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

class LoginContainer extends Component {
    // Methods
    handleLoginRequest() {
        this.props.loginRequest().then((response) => {
            if(response) {
                this.props.router.push('/dashboard')
            }
        }).catch((error) => {
            swal({
                title: "Ocorreu um erro ao fazer login",
                text: error,
                type: "error"
            })
        })
    }

    render() {
        return (
            <div className="text-center">
                {/* <div>Perolados</div> */}
                
                <button className="btn btn-primary" onClick={() => this.handleLoginRequest()}>
                Fazer login com Google
                </button>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer);
