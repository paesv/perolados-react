import React, { Component } from 'react';

import GameContainer from '../modules/Game/containers/GameContainer'

class Game extends Component {
    render() {
        return (
            <div>
                <GameContainer router={this.props.history}/>
            </div>
        );
    }
}

export default Game;
