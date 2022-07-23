import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyDCRFKaFFPP7IREvB61X-1ECHy1Im_h4Ik",
  authDomain: "messaging-app-a92c4.firebaseapp.com",
  databaseURL: "https://messaging-app-a92c4-default-rtdb.firebaseio.com",
  projectId: "messaging-app-a92c4",
  storageBucket: "messaging-app-a92c4.appspot.com",
  messagingSenderId: "22714540131",
  appId: "1:22714540131:web:3627c52efc12c5dfae1856"
};

firebase.initializeApp(firebaseConfig);

const databaseRef = firebase.database().ref();

export const database = databaseRef.child("message");

export default firebase;