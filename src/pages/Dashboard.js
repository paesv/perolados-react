import React, { Component } from 'react';

// Containers
import DashboardContainer from '../modules/Dashboard/containers/DashboardContainer'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardContainer router={this.props.history}/>
            </div>
        );
    }
}

export default Dashboard;
