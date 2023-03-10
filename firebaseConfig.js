import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDse0s2owOjeOzGxaZRMLE7FH6GLniVfXs",
  authDomain: "stable-plasma-314904.firebaseapp.com",
  projectId: "stable-plasma-314904",
  storageBucket: "stable-plasma-314904.appspot.com",
  messagingSenderId: "880751447007",
  appId: "1:880751447007:web:391b813b86d5bdd734926a",
  measurementId: "G-292G4XXPE7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
