import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD2B2yPG07dv5pAlHfpXNSGLg2R4c_Rrms",
    authDomain: "react-photo-gallery-d44c2.firebaseapp.com",
    projectId: "react-photo-gallery-d44c2",
    storageBucket: "react-photo-gallery-d44c2.appspot.com",
    messagingSenderId: "217019561108",
    appId: "1:217019561108:web:43421620baadc401b7f081"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // Initialize storage&firestore 
  const projectStorage = firebase.storage()
  const projectFireStore = firebase.firestore()

  export {projectStorage, projectFireStore}