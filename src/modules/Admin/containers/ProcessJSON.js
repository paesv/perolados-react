import React, { Component } from 'react';
import perolas from '../mocks/perolas.json';

import { perolasRef } from '../../../firebaseapp';
import { charactersRef } from '../../../firebaseapp';

class ProcessJSON extends Component {
    componentDidMount() {
        
    }

    // Methods
    insertPerolasIntoDatabase() {
        perolas.forEach(perola => {
            perolasRef.push(perola)
        });
    }

    render() {
        return (
            <div>
                <button className="btn btn-block btn-danger" onClick={this.insertPerolasIntoDatabase}>Processar JSON</button>
            </div>
        );
    }
}

export default ProcessJSON;
