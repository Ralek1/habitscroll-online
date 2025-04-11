
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDzDcaol4b5mQvYUCKl2fpQHmXxwpNPk",
  authDomain: "habitscroll-b4ccb.firebaseapp.com",
  projectId: "habitscroll-b4ccb",
  storageBucket: "habitscroll-b4ccb.appspot.com", 
  messagingSenderId: "861547233127",
  appId: "1:861547233127:web:6924798a3f107996b50206"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);

// Initialize Analytics with environment check
const initAnalytics = async () => {
  if (await isSupported()) {
    const analytics = getAnalytics(app);
    return analytics;
  }
  return null;
};

console.log("Firebase initialized with updated configuration");

export { app, auth, initAnalytics };
