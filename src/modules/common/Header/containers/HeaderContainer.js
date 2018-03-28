import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../Header.scss'

const mapStateToProps = state => {
    return {
        config: state.configStore.config
    }
}

class HeaderContainer extends Component {
    componentWillReceiveProps(nextProps) {
        console.log(nextProps)
    }

    render() {
        return (
            <div className="appbar">
                appbar
            </div>
        );
    }
}

export default connect(mapStateToProps)(HeaderContainer);
