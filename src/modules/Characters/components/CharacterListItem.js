import React, { Component } from 'react';

class CharacterListItem extends Component {
    render() {
        return (
            <li className="list-group-item d-flex justify-content-between align-items-center">
                {this.props.name}
            </li>
        )
    }
}

export default CharacterListItem;
