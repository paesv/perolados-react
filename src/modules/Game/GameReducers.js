import {
    SET_PEROLAS_TO_STORE,
    SET_CHARACTERS_TO_STORE,
} from './GameActions'

const initialState = {
    perolas: [],
    characters: [],
    perolasHasLoaded: false
}

const gameReducers = (state = initialState, action) => {
    switch(action.type) {
        case SET_PEROLAS_TO_STORE:
            return {
                ...state,
                perolas: action.perolas,
                perolasHasLoaded: true
            }

        case SET_CHARACTERS_TO_STORE:
            return {
                ...state,
                characters: action.characters
            }
        
        default:
            return state
    }
}

export default gameReducers