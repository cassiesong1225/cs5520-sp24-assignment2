import { collection, addDoc, doc, deleteDoc, setDoc,getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivityToDB(activityData) {
  try {
    const docRef = await addDoc(
      collection(database, "activities"), activityData);
  } catch (err) {
    console.log(err);
  }
}



export async function deleteFromDB(id) { 
    try { await deleteDoc(doc(database, "goals",id)); }
    catch (err) {
        console.log("Error deleting document: ", err);
    }
}