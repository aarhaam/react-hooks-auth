import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASG-5R2DwkUNchhwBC1mE6xYcEm07jl4Q",
    authDomain: "readinglistapp-7129f.firebaseapp.com",
    projectId: "readinglistapp-7129f",
    storageBucket: "readinglistapp-7129f.appspot.com",
    messagingSenderId: "452822981865",
    appId: "1:452822981865:web:817ad12f4b8f2a53832478"
  };


initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export {db, auth};