/**
* Root Reducer
*/
import { combineReducers } from 'redux';

// Import Reducers
import loginStore from './modules/Login/LoginReducers'
import configStore from './modules/common/Config/ConfigReducers'
import characterStore from './modules/Characters/CharactersReducers'
import perolaStore from './modules/Perolas/PerolasReducers'
import gameStore from './modules/Game/GameReducers'

// Combine all reducers into one root reducer
export default combineReducers({
    loginStore,
    configStore,
    characterStore,
    perolaStore,
    gameStore
});
