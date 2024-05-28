import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "AIzaSyDtBzAWY2l4m8zhDmtiYHDuWPPLmY2k4l4",
  authDomain: "gig-swiper.firebaseapp.com",
  projectId: "gig-swiper",
  storageBucket: "gig-swiper.appspot.com",
  messagingSenderId: "380131406405",
  appId: "1:380131406405:web:52b9b81013bddd9b1be92c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
