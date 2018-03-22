/**
* Root Reducer
*/
import { combineReducers } from 'redux';

// Import Reducers
import loginStore from './modules/Login/LoginReducers'

// Combine all reducers into one root reducer
export default combineReducers({
    loginStore
});
