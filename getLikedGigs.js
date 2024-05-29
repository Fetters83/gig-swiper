import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

export default async function getLikedGigs(user) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let newLikes = [];
  querySnapshot.forEach((doc) => {
    if (doc.id === user.email && user) {
      newLikes = doc.data().likedgigs;
    }
  });
  return newLikes;
}
