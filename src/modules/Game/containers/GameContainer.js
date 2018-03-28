import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import shuffleArray from 'shuffle-array';

// Components
import GameInfo from './GameInfo'

// Actions
import { getPerolasFromDatabase } from '../GameActions'
import { getCharactersFromDatabase } from '../GameActions'
import { setNewHighscore } from '../GameActions'
import { getHighscores } from '../GameActions'

const mapDispatchToProps = dispatch => {
    return {
        getPerolasFromDatabase: () => dispatch(getPerolasFromDatabase()),
        getCharactersFromDatabase: () => dispatch(getCharactersFromDatabase()),
        setNewHighscore: (score, uid, name) => dispatch(setNewHighscore(score, uid, name)),
        getHighscores: () => dispatch(getHighscores())
    }
}

const mapStateToProps = state => {
    return {
        perolas: state.gameStore.perolas,
        perolasHasLoaded: state.gameStore.perolasHasLoaded,
        characters: state.gameStore.characters,
        user: state.loginStore.user
    }
}

class GameContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            game: {
                gameStart: false,
                selectedPerola: null,
                lifes: 1,
                score: 0,
                selectedCharacters: []
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({perolas: nextProps.perolas}, () => {
            if(nextProps.perolasHasLoaded) {
                this.getRandomPerola()
            }
        })
    }

    componentDidMount() {
        this.props.getCharactersFromDatabase()
        this.props.getPerolasFromDatabase()
    }

    getRandomPerola() {
        let perolas = this.state.perolas
        let perolasSize = perolas.length
        let randomIndex = Math.floor((Math.random() * perolasSize));
        let selectedPerola = perolas[randomIndex]

        this.setState(Object.assign(this.state.game, {selectedPerola}))
        this.setState(Object.assign(this.state.game, {gameStart: true}))

        let selectedCharacters = []
        selectedCharacters.push(this.state.game.selectedPerola.character)

        while(selectedCharacters.length < 4) {
            let selectedCharacter = this.getRandomCharacter()
            let name = selectedCharacter.name

            if(!selectedCharacters.includes(name)) {
                selectedCharacters.push(name)
            } 
        }

        selectedCharacters = shuffleArray(selectedCharacters)

        this.setState(Object.assign(this.state.game, {selectedCharacters}))
    }

    getRandomCharacter() {
        let characters = this.props.characters
        let charactersSize = characters.length
        let randomIndex = Math.floor((Math.random() * charactersSize));
        let selectedCharacter = characters[randomIndex]
        return selectedCharacter
    }

    checkAnswer(character) {
       if(this.state.game.lifes > 0) {
            if(character == this.state.game.selectedPerola.character) {
                this.setState(Object.assign(this.state.game, {score: this.state.game.score + 100}))
                swal({
                    title: "Resposta correta",
                    type: "success",
                    timer: 1500,
                    showConfirmButton: false
                })
            } else {
                this.setState(Object.assign(this.state.game, {lifes: this.state.game.lifes-1}))

                if(this.state.game.lifes == 0) {
                    this.setHighscore()
                }

                swal({
                    title: "Resposta Errada",
                    type: "error",
                    timer: 1500,
                    showConfirmButton: false
                })
            }
       }

        this.getRandomPerola()
    }

    restartGame() {
        this.setState(Object.assign(
            this.state.game, {
                score: 0,
                lifes: 1
            }
        ))
    }

    setHighscore() {
        this.props.setNewHighscore(this.state.game.score, this.props.user.uid, this.props.user.displayName).then((response) => {
            if(response) {
                swal({
                    title: response,
                    type: "info"
                })
            }
        })

        this.props.getHighscores().then(highscores => {
            this.setState({highscores})
        })
    }

    renderHighscores() {
        if(this.state.highscores) {
            return <div className="mb-5 text-center">
                <h5>Placares</h5>
                <ul className="list-group">
                    {Object.keys(this.state.highscores).map(key => {
                        return <li key={key} className="list-group-item d-flex justify-content-between align-items-center">
                        {this.state.highscores[key].name}
                        <span className="badge badge-primary badge-pill">{this.state.highscores[key].score}</span>
                        </li>
                    })}
                </ul>
                <hr/>
            </div>
        } else {
            return <div className="alert alert-primary">
                Carregando Placares
            </div>
        }
    }

    // Conditional Render
    renderComponent() {
        if(this.props.perolasHasLoaded && this.state.gameStart) {
            if(this.state.game.lifes > 0) {
                return <div>
                    <div className="alert alert-danger text-center">
                        Vidas: {this.state.game.lifes} | Pontos: {this.state.game.score}
                    </div>

                    <div className="alert alert-primary p-5">
                        {this.state.game.selectedPerola.text}
                    </div>

                    {this.state.game.selectedCharacters.map(character => {
                        return <button key={character} onClick={() => this.checkAnswer(character)} className="btn btn-block btn-primary p-3">
                        {character}
                        </button>
                    })}
                </div>
            } else {
                return (<div>
                    <div className="alert alert-danger text-center pt-3">
                        <h5>Game Over, otário!</h5>
                    </div>

                    <div className="alert alert-primary">
                    Pontuação: {this.state.game.score}
                    </div>

                    {this.renderHighscores()}

                    <button className="btn btn-block btn-success"
                    onClick={() => this.restartGame()}>Recomeçar</button>
                    <button className="btn btn-block btn-primary">Voltar para dashboard</button>
                </div>)
            }
        } else {
            return "carregando"
        }
    }

    render() {
        return (
            <div className="p-3">
                {this.renderComponent()}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
