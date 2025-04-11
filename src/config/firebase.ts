
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCDzDcaol4b5mQvYUCKl2fpQHmXxwpNPk",
  authDomain: "habitscroll-b4ccb.firebaseapp.com",
  projectId: "habitscroll-b4ccb",
  storageBucket: "habitscroll-b4ccb.firebasestorage.app",
  messagingSenderId: "861547233127",
  appId: "1:861547233127:web:769503666f785c6e9df9c2",
  measurementId: "G-E4JKCFNJFW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics with environment check
const initAnalytics = async () => {
  if (await isSupported()) {
    const analytics = getAnalytics(app);
    return analytics;
  }
  return null;
};

export { app, initAnalytics };
