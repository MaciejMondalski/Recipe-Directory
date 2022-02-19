import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDVU2iexGaQC5v594YGgGwW-CLc8camrnc',
  authDomain: 'recipe-directory-application.firebaseapp.com',
  projectId: 'recipe-directory-application',
  storageBucket: 'recipe-directory-application.appspot.com',
  messagingSenderId: '1074009094910',
  appId: '1:1074009094910:web:2da001cf0d5e50170743af',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
