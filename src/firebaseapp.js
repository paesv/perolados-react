import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCC1MN9lIBi6zCkwD7BbzZaKgK7FITOV6A",
    authDomain: "cdp-perolados.firebaseapp.com",
    databaseURL: "https://cdp-perolados.firebaseio.com",
    projectId: "cdp-perolados",
    storageBucket: "",
    messagingSenderId: "13772366381"
}

export const firebaseApp = firebase.initializeApp(config)
export const perolasRef = firebase.database().ref().child('perolas')
export const charactersRef = firebase.database().ref().child('characters')
export const highscoresRef = firebase.database().ref().child('highscores')