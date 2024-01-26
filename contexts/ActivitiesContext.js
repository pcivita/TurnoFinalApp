import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    ["Green Library", "Quiet and beautiful spot to study", "Exercise"],
    ["Tresidder", "Can grab a coffee while working", "Academic"],
    ["Coupa Cafe", "Great lattes", "Work"],
    // ["Meditate", "Medidate for 10 minutes outside", "Relax"],
  ]);

  const [canRoll, setCanRoll] = useState(true);

  // Function to add a new activity
  const addActivity = (name, description, category) => {
    setActivities((activities) => {
      let newActivity = [name, description, category];
      activities.push(newActivity);

      if (activities.length >= 2) {
        setCanRoll(true);
      }

      return activities;
    });
  };

  const editActivity = (activityIndex, newName, newDescription, newCategory) => {
    setActivities((prevActivities) => {
      // Create a new array with the updated activity
      const updatedActivities = [...prevActivities];
      updatedActivities[activityIndex] = [newName, newDescription, newCategory];
  
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
