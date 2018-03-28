// Firebase
import firebase from "firebase"
import { firebaseApp } from '../../firebaseapp'
import { perolasRef } from '../../firebaseapp'

// Actions
export const ADD_PEROLA_TO_DATABASE = 'ADD_PEROLA_TO_DATABASE'

export const addPerolaToDatabase = (perola) => {
    return (dispatch) => {
        perolasRef.push(perola).then(response => {
            return response
        })
    }
}