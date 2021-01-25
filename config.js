import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyDvQi_LCbQarnvtyOgOKXSfGcf9iUPyV9Q",
  authDomain: "book-santa-app-ae305.firebaseapp.com",
  projectId: "book-santa-app-ae305",
  storageBucket: "book-santa-app-ae305.appspot.com",
  messagingSenderId: "645622978909",
  appId: "1:645622978909:web:baa68a38cf6e213d51f0b4",
  measurementId: "G-3C5MKE9J7J"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// export default firebase.firestore();

export default !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.firestore()
