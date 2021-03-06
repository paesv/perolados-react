import firebase from "firebase"
import { firebaseApp } from '../../firebaseapp'

// Const Actions
export const LOGIN = 'LOGIN'

export const login = (user) => {
    return {
        type: LOGIN,
        user
    }
}

export const loginRequest = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    return (dispatch) => {
        return new Promise ((resolve, reject) => {
            firebase.auth().signInWithPopup(provider).then((result) => {
                var token = result.credential.accessToken
                var user = result.user
                
                // Dispatch user to reducer
                resolve(true)
                dispatch(login(user))
    
            }).catch((error) => {
                console.log("Login error - " + error)
                reject(error)
            })
        })
    }
}