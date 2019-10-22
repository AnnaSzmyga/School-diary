import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


var firebaseConfig = {
    apiKey: "AIzaSyCXToUd-dAC2cqKJfW5C4iiikxbomeoZpE",
    authDomain: "school-diary-6a10b.firebaseapp.com",
    databaseURL: "https://school-diary-6a10b.firebaseio.com",
    projectId: "school-diary-6a10b",
    storageBucket: "school-diary-6a10b.appspot.com",
    messagingSenderId: "850011671734",
    appId: "1:850011671734:web:6c22bfcee911cc0c77aa17"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore();



export default firebase;