import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    ["Green Library"],
    ["Tresidder"],
    ["Coupa Cafe"],
  ]);

  const [canRoll, setCanRoll] = useState(true);

  // Function to add a new activity
  const addActivity = (name) => {
    setActivities((activities) => {
      let newActivity = [name];
      activities.push(newActivity);

      if (activities.length >= 2) {
        setCanRoll(true);
      }

      return activities;
    });
  };

  const editActivity = (activityIndex, newName) => {
    setActivities((prevActivities) => {
      // Create a new array with the updated activity
      const updatedActivities = [...prevActivities];
      updatedActivities[activityIndex] = [newName];
  
      return updatedActivities;
    });
  };

  const deleteActivity = (activityIndex) => {
    setActivities((prevActivities) => {
      const updatedActivities = prevActivities.filter((activity, index) => index !== activityIndex);

      if (updatedActivities.length < 2) {
        setCanRoll(false);
      }

      return updatedActivities;
    });
  };


  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, editActivity, deleteActivity, canRoll }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;


// noActivitiesMessage:
// "You have no Current Activities.\n\nCreate an activity or add one from the Pending Activities section to use your dice!",
