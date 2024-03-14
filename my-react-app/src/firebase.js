// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF5N36XX--e3M_iH1cl2yCEBx6DxZZ_7o",
  authDomain: "my-react-app-2eac5.firebaseapp.com",
  projectId: "my-react-app-2eac5",
  storageBucket: "my-react-app-2eac5.appspot.com",
  messagingSenderId: "1014812107371",
  appId: "1:1014812107371:web:a004afbe6e466a7034072e",
  measurementId: "G-8ZYFG00MCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
