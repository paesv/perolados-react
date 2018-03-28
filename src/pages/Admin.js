import React, { Component } from 'react';

// Import Containers
import AddCharacterForm from '../modules/Characters/containers/AddCharacterForm'
import ListCharacters from '../modules/Characters/containers/ListCharacters'
import ProcessJSON from '../modules/Admin/containers/ProcessJSON'

class Admin extends Component {
    render() {
        return (
            <div className="p-3">
                <AddCharacterForm/>
                <hr/>
                <ListCharacters/>

                {/* <ProcessJSON/> */}
            </div>
        );
    }
}

export default Admin;
