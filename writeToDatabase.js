import { collection, addDoc, doc, setDoc } from "firebase/firestore";
import db from "./firebaseConfig";

// export default async function writeToDatabase(likedGigs) {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Tohm",
//       last: "Heeley",
//       born: 1815,
//       likedgigs: likedGigs,
//     });
//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }

export default async function writeToDatabase(likedGigs, user) {
  if (user) {
    await setDoc(doc(db, "users", user.email), {
      likedgigs: likedGigs,
    });
  }
}
