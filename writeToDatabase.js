import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export default async function writeToDatabase(likedGigs, user) {
  if (user) {
    await setDoc(doc(db, "users", user.email), {
      likedgigs: likedGigs,
    });
  }
}
