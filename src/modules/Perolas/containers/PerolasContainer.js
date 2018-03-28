import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getCharacters } from '../../Characters/CharactersActions'
import { addPerolaToDatabase } from '../PerolasActions'

const mapStateToProps = state => {
    return {
        charactersHasLoaded : state.characterStore.charactersHasLoaded,
        characters: state.characterStore.characters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(getCharacters()),
        addPerolaToDatabase: (perola) => dispatch(addPerolaToDatabase(perola))
    }
}

class PerolasContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            character: 'shinoda',
            text: ''
        }
    }

    componentDidMount() {
        this.props.getCharacters()
    }

    componentWillReceiveProps(nextProps) {
        
    }

    // Methods
    handleFormSubmit = (event) => {
        event.preventDefault()

        const perola = {
           character: this.state.character,
           text: this.state.text
        }

        if(this.state.text) {
            this.props.addPerolaToDatabase(perola)
            this.setState({text: ''})
            swal({
                title: "Perola Adicionada",
                type: "success"
            })
        } else {
            swal({
                title: "Preencha os campos",
                type: "error"
            })
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.id]: event.target.value });
    }

    // Conditional Render
    renderComponent() {
        if(this.props.charactersHasLoaded) {
            return <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Personagem</label>
                    <select className="form-control" id="character" value={this.state.character} onChange={this.handleInputChange}>
                        {Object.keys(this.props.characters).map(character => {
                            return <option key={character}>{character}</option>
                        })}
                    </select>
                </div>

                <div className="form-group">
                    <label>Pérola</label>
                    <textarea className="form-control" id="text" value={this.state.text} onChange={this.handleInputChange}></textarea>
                </div>

                <input type="submit" className="btn btn-success btn-block" value="Adicionar"/>
            </form>
        } else {
            return "carregando"
        }
    }

    render() {
        return (
            <div>
               {this.renderComponent()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PerolasContainer);
