import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    ["Soccer", "I want to play soccer", "Exercise"],
    ["Read", "I want to read", "Academic"],
    // ["Write", "Write a chapter in my novel", "Work"],
    // ["Meditate", "Medidate for 10 minutes outside", "Relax"],
  ]);

  // Function to add a new activity
  const addActivity = (name, description, category) => {
    setActivities((activities) => {
      let newActivity = [name, description, category];
      activities.push(newActivity);
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
      console.log("DELETING ACTIVITY CALLED " + activityIndex);
      const updatedActivities = prevActivities.filter((activity, index) => index !== activityIndex);
      console.log("updated: ");
      console.log(updatedActivities);
      return updatedActivities;
    });
  };
  

  return (
    <ActivitiesContext.Provider value={{ activities, addActivity, editActivity, deleteActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;


// noActivitiesMessage:
// "You have no Current Activities.\n\nCreate an activity or add one from the Pending Activities section to use your dice!",
