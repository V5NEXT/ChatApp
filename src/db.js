import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAz3NGWwWjBmqa2nl2zq1zMf0jkz5JeA3M",
  authDomain: "drgt-chat.firebaseapp.com",
  databaseURL: "https://drgt-chat-default-rtdb.firebaseio.com",
  projectId: "drgt-chat",
  storageBucket: "drgt-chat.appspot.com",
  messagingSenderId: "640602591761",
  appId: "1:640602591761:web:f5cb76521ac789844f97b0",
  measurementId: "G-FT2XYWZ65V"
};

const app = initializeApp(firebaseConfig);

const db = getDatabase(app);

export {db}

