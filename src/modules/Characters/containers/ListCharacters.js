import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCharacters } from '../CharactersActions'

// Components
import CharacterListItem from '../components/CharacterListItem'

const mapStateToProps = state => {
    return {
        charactersHasLoaded: state.characterStore.charactersHasLoaded,
        characters: state.characterStore.characters
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCharacters: () => dispatch(getCharacters())
    }
}

class ListCharacters extends Component {
    constructor(props) {
        super(props)

        this.state = {
            charactersCount: 0,
            showCharactersList: false
        }
    }

    componentDidMount() {
        this.props.getCharacters()
    }

    componentWillReceiveProps(nextProps) {
        this.countCharacters(nextProps.characters)
    }

    // Methods
    countCharacters = (characters) => {
        let charactersCount = 0
        Object.keys(characters).map(element =>{
            charactersCount++
        })
        this.setState({charactersCount})
    }

    // Conditional Render

    renderComponent() {
        if(this.props.charactersHasLoaded) {
            if(this.props.characters) {
                if(this.state.showCharactersList) {
                    return Object.keys(this.props.characters).map(key => {
                        return <CharacterListItem name={this.props.characters[key].name} key={key}/>
                    })
                }
            } else {
                return "Nenhum Personagem cadastrado"
            }
        } else {
            return <div className="alert alert-primary text-center">Carregando</div>
        }
    }

    render() {
        return (
            <div>
                <li 
                className="list-group-item d-flex justify-content-between align-items-center" 
                onClick={() => this.setState({showCharactersList: !this.state.showCharactersList})}>
                    Personagens Cadastrados
                    <span className="badge badge-primary badge-pill">
                        {this.state.charactersCount}
                    </span>
                </li>

                {this.renderComponent()}

                <hr/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCharacters);
