import * as  firebase from "firebase/compat/app";
import "firebase/compat/firestore"
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyCflRrbMCMOaSni3V7JW3KhTa3IcZnK22I",
  authDomain: "mahakal-10927.firebaseapp.com",
  projectId: "mahakal-10927",
  storageBucket: "mahakal-10927.appspot.com",
  messagingSenderId: "805951102313",
  appId: "1:805951102313:web:af7a0252b15aed0f6531f8",
  measurementId: "G-E6LHSK6XV0"
};

if (!firebase.apps.length) {
 const firebaseAp =firebase.initializeApp(firebaseConfig);
 const storage = getStorage(firebaseAp)
}


export { firebase,storage }
// const storage= getStorage(firebaseAp)
//firebase.initializeApp(firebaseConfig);
//const db = firebase.firestore();
