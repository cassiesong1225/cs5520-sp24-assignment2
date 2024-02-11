import React, { createContext, useState } from 'react';

// Creating the context object and passing the default values.
export const ActivitiesListContext = createContext({
  activities: [],
  addActivity: () => {},
  removeActivity: () => {},
  updateActivity: () => {},
});

// Provider component that will wrap the parts of your app that need the activities data
export const ActivitiesListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  // Function to add a new activity to the list
  const addActivity = (newActivity) => {
    setActivities((currentActivities) => [newActivity, ...currentActivities]);
  };

  // Function to remove an activity from the list
  const removeActivity = (activityId) => {
    setActivities((currentActivities) =>
      currentActivities.filter((activity) => activity.id !== activityId)
    );
  };

  // Function to update an existing activity
  const updateActivity = (updatedActivity) => {
    setActivities((currentActivities) =>
      currentActivities.map((activity) =>
        activity.id === updatedActivity.id ? updatedActivity : activity
      )
    );
  };

  // The value passed to the provider includes everything that should be accessible from the context
  return (
    <ActivitiesListContext.Provider value={{ activities, addActivity, removeActivity, updateActivity }}>
      {children}
    </ActivitiesListContext.Provider>
  );
};
