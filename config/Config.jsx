import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth"
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDtBzAWY2l4m8zhDmtiYHDuWPPLmY2k4l4",
  authDomain: "gig-swiper.firebaseapp.com",
  projectId: "gig-swiper",
  storageBucket: "gig-swiper.appspot.com",
  messagingSenderId: "380131406405",
  appId: "1:380131406405:web:52b9b81013bddd9b1be92c"
};


const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
}
)
export { app, auth, getAuth }
