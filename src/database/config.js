// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/database";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAHfOXNMGVWVMgB7oFlIMQkqMPMS_1_bE8",
    authDomain: "photowall-3d0b7.firebaseapp.com",
    databaseURL: "https://photowall-3d0b7-default-rtdb.firebaseio.com",
    projectId: "photowall-3d0b7",
    storageBucket: "photowall-3d0b7.appspot.com",
    messagingSenderId: "16383443507",
    appId: "1:16383443507:web:9f184a1ed6e95034b15946",
    measurementId: "G-6M2W0BEZ4M"
};

firebase.initializeApp(firebaseConfig)
const database = firebase.database()
export {database}