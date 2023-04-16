import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD51HPgarA8CkmKCHlo4NVXbNDE-TwPaTE",
  authDomain: "banded-equator-381709.firebaseapp.com",
  databaseURL: "https://banded-equator-381709-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "banded-equator-381709",
  storageBucket: "banded-equator-381709.appspot.com",
  messagingSenderId: "748887344018",
  appId: "1:748887344018:web:e779b0a1c764655fddf74b",
  measurementId: "G-H6PGHKV065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);