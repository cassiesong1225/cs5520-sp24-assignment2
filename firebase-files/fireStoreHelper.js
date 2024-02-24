import { collection, addDoc, doc, deleteDoc, setDoc,getDocs } from "firebase/firestore";
import { database } from "./firebaseSetup";

export async function addActivityToDB(activityData) {
  try {
    const docRef = await addDoc(
      collection(database, "activities"),activityData);
  } catch (err) {
    console.log(err);
  }
}

export async function fetchActivitiesFromDB() {
  const activities = [];
  try {
    const querySnapshot = await getDocs(collection(database, "activities"));
    querySnapshot.forEach((doc) => {
     
      activities.push({ id: doc.id, ...doc.data() });
    });
  } catch (err) {
    console.error("Error fetching activities: ", err);
  }
  return activities;
}
