import { collection, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivityToDB(activityData) {
  try {
    const docRef = await addDoc(
      collection(database, "activities"),activityData);
  } catch (err) {
    console.log(err);
  }
}
