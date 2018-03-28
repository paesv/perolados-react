// Firebase
import firebase from "firebase"
import { firebaseApp } from '../../firebaseapp'
import { charactersRef } from '../../firebaseapp'

// Actions
export const GET_CHARACTERS = 'GET_CHARACTERS'
export const SET_LOADED_CHARACTERS = 'SET_LOADED_CHARACTERS'
export const ADD_CHARACTER_TO_STORE = 'ADD_CHARACTER_TO_STORE'
 
export const addCharacterToDatabase = (character) => {
    return(dispatch) => {
        return charactersRef.child(character.name).set(character).then((response) => {
            dispatch(addCharacterToStore(character))
        })
    }
}

export const addCharacterToStore = (character) => {
    return {
        type: ADD_CHARACTER_TO_STORE, 
        character
    }
}

export const setLoadedCharacters = (characters) => {
    return {
        type: SET_LOADED_CHARACTERS,
        characters
    }
}

export const getCharacters = () => {
    return (dispatch) => {
        return charactersRef.once('value', snapshot => {
            let characters = snapshot.val()
            dispatch(setLoadedCharacters(characters))
        })
    }
}