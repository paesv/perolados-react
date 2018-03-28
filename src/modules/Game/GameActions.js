// Firebase
import firebase from "firebase"
import { firebaseApp, charactersRef } from '../../firebaseapp'
import { perolasRef } from '../../firebaseapp'
import { highscoresRef } from '../../firebaseapp'

export const GET_PEROLAS_FROM_DATABASE = 'GET_PEROLAS_FROM_DATABASE'
export const SET_PEROLAS_TO_STORE = 'SET_PEROLAS_TO_STORE'
export const SET_CHARACTERS_TO_STORE = 'SET_CHARACTERS_TO_STORE'
export const SET_NEW_HIGHSCORE = 'SET_NEW_HIGHSCORE'

export const getPerolasFromDatabase = () => {
    return (dispatch) => {
        perolasRef.on('value', snapshot => {
            let perolas = snapshot.val()
            let perolasArray = []

            Object.keys(perolas).map(key => {
                perolasArray.push(perolas[key])
            })

            dispatch(setPerolasToStore(perolasArray))
        })
    }
}

export const setPerolasToStore = (perolas) => {
    return {
        type: SET_PEROLAS_TO_STORE,
        perolas
    }
}

export const getCharactersFromDatabase = () => {
    return (dispatch) => {
        charactersRef.on('value', snapshot => {
            let characters = snapshot.val()
            let charactersArray = []

            Object.keys(characters).map(key => {
                charactersArray.push(characters[key])
            })

            dispatch(setCharactersToStore(charactersArray))
        })
    }
}

export const setCharactersToStore = (characters) => {
    return {
        type: SET_CHARACTERS_TO_STORE,
        characters
    }
}

export const setNewHighscore = (score, uid, name) => {
    console.log("set new highscore")
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            highscoresRef.child(uid).once('value', snapshot => {
                if(snapshot.exists()) {
                    let highscore = snapshot.val()
                    if(score > highscore.score) {
                        highscoresRef.child(uid).set({score, name, updatedAt: Date.now()})
                        resolve("Novo Highscore Pessoal!")
                    }
                } else {
                    highscoresRef.child(uid).set({score, name, updatedAt: Date.now()})
                    resolve("Highscore Adicionado!")                    
                }
            }).catch((error) => {
                reject(error)
            })
        })
    }
}

export const getHighscores = () => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            highscoresRef.once('value', snapshot => {
                resolve(snapshot.val())
            })
        })
    }
}