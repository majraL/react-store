import Rebase from "re-base"; // react-firebase komponenta koja mirror-a firebase data sa react component's state
import firebase from "firebase"; // official paket od firebase

// inicijalizacija firebase-a
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDTZFRYx282ySsoZxydAuGfbLbcHTYmX0Q",              // Auth / General Use
  authDomain: "catch-of-the-day-majral.firebaseapp.com",          // Auth with popup/redirect
  databaseURL: "https://catch-of-the-day-majral.firebaseio.com/"  // Realtime Database
});

// 
const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
