import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const app = firebase.initializeApp({
  apiKey: "AIzaSyBT2lAZlxVC0cyLm0nlioFBp2j8IDI7DNk",
  authDomain: "vision-auth-dev.firebaseapp.com",
  projectId: "vision-auth-dev",
  storageBucket: "vision-auth-dev.appspot.com",
  messagingSenderId: "1024791686309",
  appId: "1:1024791686309:web:87f18a9770ba045a5bb14c",
});
export const auth = app.auth();
export default app;
