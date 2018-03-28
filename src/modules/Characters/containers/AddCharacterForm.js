import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addCharacterToDatabase } from '../CharactersActions'

const mapDispatchToProps = dispatch => {
    return {
        addCharacter: (character) => dispatch(addCharacterToDatabase(character))
    }
}

class AddOwnerForm extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    handleSubmitForm = (event) => {
        event.preventDefault();

        const {
            name
        } = this.state

        this.props.addCharacter({name})
        this.setState({name: ''})
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <div className="form-group">
                        <label>Nome</label>
                        <input 
                        id="name"
                        type="text" 
                        value={this.state.name}
                        className="form-control" 
                        placeholder="Nome do Cidadão"
                        onChange={this.handleInputChange}
                        />
                    </div>
                    <input type="submit" className="btn btn-success btn-block" value="Cadastrar"/>
                </form>
            </div>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddOwnerForm);
