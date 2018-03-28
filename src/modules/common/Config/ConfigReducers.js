// Import Actions
import {
    SET_DOMAIN_DATA
} from './ConfigActions'

// Initial State
const initialState = {
   
}

// Reducer
const ConfigReducers = (state = initialState, action) => {
    switch(action.type) {
        case SET_DOMAIN_DATA:
            return {
                ...state,
                config: action.data
            }
        default: 
            return state
    }
}

export default ConfigReducers