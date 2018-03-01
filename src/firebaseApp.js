import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBznrw-OE3aMCXXS9fCYYJw3Kb8MoBsJic",
    authDomain: "agilitevue.firebaseapp.com",
    databaseURL: "https://agilitevue.firebaseio.com",
    projectId: "agilitevue",
    storageBucket: "",
    messagingSenderId: "360181244574"
  };

  export const firebaseApp = firebase.initializeApp(config);
  // export const dogsRef = firebaseApp.database().ref().child('dogs');
  // export const competitionsRef = firebaseApp.database().ref().child('competitions');
  export const db = firebaseApp.firestore();
