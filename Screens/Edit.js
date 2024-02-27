import React, { useState, useEffect } from "react";
import { fetchActivityById } from "../firebase-files/fireStoreHelper";

export default function useEditMode(activityId) {
  const [isEditMode, setIsEditMode] = useState(false);
  const [activityData, setActivityData] = useState(null);

  useEffect(() => {
    const fetchActivityData = async () => {
      if (!activityId) {
        setIsEditMode(false);
        return;
      }

      setIsEditMode(true);
      try {
        const data = await fetchActivityById(activityId);
        setActivityData(data);
      } catch (error) {
        console.error("Error fetching activity data: ", error);
      }
    };

    fetchActivityData();
  }, [activityId]);

  return { isEditMode, activityData, setIsEditMode, setActivityData };
}
