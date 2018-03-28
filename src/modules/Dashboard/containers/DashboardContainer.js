import React, { Component } from 'react';
import {connect} from 'react-redux';
import '../Dashboard.scss'

const mapStateToProps = state => {
    return {
        user: state.loginStore.user
    }
}

class DashboardContainer extends Component {
    render() {
        return (
            <div className="text-center pt-4">
            <h5>Perolados</h5>
            <hr/>
            <div className="p-3">
                <button 
                className="btn btn-primary btn-block p-3"
                onClick={() => this.props.router.push('/game')}>
                Começar partida
                </button>
                
                <button 
                className="btn btn-primary btn-block p-3"
                onClick={() => this.props.router.push('/highscores')}>
                Highscores
                </button>
                
                <button 
                className="btn btn-primary btn-block p-3" 
                onClick={() => this.props.router.push('/nova-perola')}>
                Cadastrar Pérola
                </button>
            </div> 
            </div>
        );
    }
}

DashboardContainer.propTypes = {
    user: PropTypes.object.isRequired
}

export default connect(mapStateToProps)(DashboardContainer);
