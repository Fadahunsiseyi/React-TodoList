

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDYlNbbnMYxqdcMpMG8_lSIJ2D6waxUB0E",
    authDomain: "todo-app-react-ae19a.firebaseapp.com",
    projectId: "todo-app-react-ae19a",
    storageBucket: "todo-app-react-ae19a.appspot.com",
    messagingSenderId: "369186809997",
    appId: "1:369186809997:web:7298135efe661001fa1ac4",
    measurementId: "G-PBT9J0VKY3"
})

const db = firebaseApp.firestore()

export default db