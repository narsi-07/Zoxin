import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMKDVzhYaCAqPYeV_kZC8ki9wGLe3lUC4",
  authDomain: "mogo-2c3ca.firebaseapp.com",
  projectId: "mogo-2c3ca",
  storageBucket: "mogo-2c3ca.appspot.com",
  messagingSenderId: "491544897510",
  appId: "1:491544897510:web:388c48208b7cb7e443d827",
  measurementId: "G-JZ0S5EF9M9"
})

const auth = app.auth()
const db = app.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, db, provider }
