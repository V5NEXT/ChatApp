import * as firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyAz3NGWwWjBmqa2nl2zq1zMf0jkz5JeA3M",
    authDomain: "drgt-chat.firebaseapp.com",
    projectId: "drgt-chat",
    storageBucket: "drgt-chat.appspot.com",
    messagingSenderId: "640602591761",
    appId: "1:640602591761:web:f5cb76521ac789844f97b0",
    measurementId: "G-FT2XYWZ65V"
}

const db = firebase.initializeApp(config);
export default db;