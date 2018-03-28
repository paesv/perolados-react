import {
    SET_LOADED_CHARACTERS, 
    ADD_CHARACTER_TO_STORE
} from './CharactersActions'

const initialState = {
    charactersHasLoaded: false,
    characters: {}
}

const CharactersReducers = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOADED_CHARACTERS:
            return {
                ...state,
                charactersHasLoaded: true,
                characters: action.characters
            }

        case ADD_CHARACTER_TO_STORE:
            return {
                ...state,
                characters: {
                    ...state.characters, [action.character.name]: action.character
                }
            }

        default:
            return state
    }
}

export default CharactersReducers