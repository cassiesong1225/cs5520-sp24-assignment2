import { collection, addDoc, doc, deleteDoc, setDoc,getDoc,updateDoc } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivityToDB(activityData) {
  try {
    const docRef = await addDoc(
      collection(database, "activities"), activityData);
  } catch (err) {
    console.log(err);
  }
}





export async function updateActivityById(activityId, activityData) {
  const docRef = doc(database, "activities", activityId);
  try {
    await updateDoc(docRef, activityData);
    console.log("Document successfully updated");
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error; // Rethrow the error if you want to handle it outside
  }
}

export async function fetchActivityById(activityId) {
  const docRef = doc(database, "activities", activityId);
  try {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching activity: ", error);
    throw error; // Rethrow the error if you want to handle it outside
  }
}

export async function deleteFromDB(activityId) { 
    try { await deleteDoc(doc(database, "activities", activityId)); }
    catch (err) {
        console.log("Error deleting document: ", err);
    }
}