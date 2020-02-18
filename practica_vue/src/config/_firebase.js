import * as firebase from 'firebase'

var firebaseConfig = {
  apiKey: 'AIzaSyDZDjlQASLCmZCim9gD20tsojCvbHVzzkI',
  authDomain: 'clase-practica.firebaseapp.com',
  databaseURL: 'https://clase-practica.firebaseio.com',
  projectId: 'clase-practica',
  storageBucket: 'clase-practica.appspot.com',
  messagingSenderId: '209551456090',
  appId: '1:209551456090:web:ba94d093635848a352a563',
  measurementId: 'G-measurement-id'
}

// firebase.initializeApp(firebaseConfig)

var fireApp = firebase.initializeApp(firebaseConfig)

export default fireApp
