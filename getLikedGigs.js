import { collection, getDocs } from "firebase/firestore";
import db from "./firebaseConfig";

import { useContext } from "react";
import { LikedGigContext } from "./contexts/LikedGigContext";

export default async function getLikedGigs(user) {
  const querySnapshot = await getDocs(collection(db, "users"));
  let newLikes = [];
  querySnapshot.forEach((doc) => {
    if (doc.id === user.email && user) {
      console.log(doc.id, user.email, "info in async");
      newLikes = doc.data().likedgigs;
      console.log(newLikes, "NEW LIKES IN GET REQ");
    }
  });
  return newLikes;
}
