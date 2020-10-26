import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDFfllLK3SPe2WzT9ZJIeVSPob9qSL5AG0',
  authDomain: 'camponion-5ddea.firebaseapp.com',
  databaseURL: 'https://camponion-5ddea.firebaseio.com',
  projectId: 'camponion-5ddea',
  storageBucket: 'camponion-5ddea.appspot.com',
  messagingSenderId: '1048949214928',
  appId: '1:1048949214928:web:8dc853cacf345b42ecd8d5',
};

export const fb = firebase.initializeApp(config);

export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = fb.firestore();
export const auth = firebase.auth();
