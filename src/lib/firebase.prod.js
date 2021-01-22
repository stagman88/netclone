/* eslint-disable comma-dangle */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAfBnKZeYLdudGw-vf5CtMFnHnEAvM6UYw',
  authDomain: 'netflix-clone-2ba7b.firebaseapp.com',
  projectId: 'netflix-clone-2ba7b',
  storageBucket: 'netflix-clone-2ba7b.appspot.com',
  messagingSenderId: '1074327037247',
  appId: '1:1074327037247:web:df7ba3c851f1657f5fdf8a',
  measurementId: 'G-RVQ1TCSGJB'
};

const firebase = Firebase.initializeApp(config);

export { firebase };
