import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDT9o6leh8Ouv2oyWcorLoHTzVpfNoSwtU",
    authDomain: "notemaster-a2573.firebaseapp.com",
    databaseURL: "https://notemaster-a2573.firebaseio.com",
    projectId: "notemaster-a2573",
    storageBucket: "notemaster-a2573.appspot.com",
    messagingSenderId: "507562393049",
    appId: "1:507562393049:web:38ace1406539847bc62dc8",
    measurementId: "G-KTBQTEVZDZ"
}

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')
