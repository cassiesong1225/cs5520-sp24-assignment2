import React, { createContext, useState } from 'react';

// Creating the context object and passing the default values.
export const ActivitiesListContext = createContext({
  activities: [],
  addActivity: () => {},
});

// Provider component that will wrap the parts of your app that need the activities data
export const ActivitiesListProvider = ({ children }) => {
  const [activities, setActivities] = useState([]);

  // Function to add a new activity to the list
  const addActivity = (newActivity) => {
    setActivities((currentActivities) => [newActivity, ...currentActivities]);
  };
return (
    <ActivitiesListContext.Provider value={{ activities, addActivity }}>
      {children}
    </ActivitiesListContext.Provider>
  );
};
