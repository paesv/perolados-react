import {
    LOGIN
} from './LoginActions'

const initialState = {
    user: {
        uid: "EntSjDxcvmh08bVBeOKGCfqWQQG3",
        displayName: "Vitor Paes"
    }
}

const LoginReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

export default LoginReducer