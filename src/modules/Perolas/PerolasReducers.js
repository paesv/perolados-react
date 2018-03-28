import {
    ADD_PEROLA_TO_DATABASE
} from './PerolasActions'

const initialState = {

}

const PerolasReducers = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PEROLA_TO_DATABASE:
            return {
                state
            }

        default:
            return state
    }
}

export default PerolasReducers