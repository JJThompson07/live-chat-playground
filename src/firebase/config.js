import firebase from 'firebase/compat'
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyClF0ob_lzsHhEK0PsoBHLt4_HKJQ7u7K8",
    authDomain: "udemy-vue-firebase-sites-6b90c.firebaseapp.com",
    projectId: "udemy-vue-firebase-sites-6b90c",
    storageBucket: "udemy-vue-firebase-sites-6b90c.appspot.com",
    messagingSenderId: "101726872013",
    appId: "1:101726872013:web:46179ac009b6e5623fe484",
    measurementId: "G-TD624GR49N"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }
