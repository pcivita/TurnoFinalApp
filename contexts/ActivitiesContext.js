import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    ["Soccer", "I want to play soccer", "Exercise"],
    ["Reading", "I want to read", "Relax"],
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
  

  return (
    <ActivitiesContext.Provider
      value={{ activities, addActivity, editActivity }}
    >
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;

// [
//   "Soccer",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Exercise",
// ],
// [
//   "Write",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Work",
// ],
// [
//   "Read",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Academic",
// ],
// [
//   "Meditate",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Relax",
// ],
// [
//   "Have fun",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Social",
// ],
// [
//   "Clean house",
//   "Lorem ipsum dolor sit amet. Sed dolores similique aut...",
//   "Chore",
// ],

// noActivitiesMessage:
// "You have no Current Activities.\n\nCreate an activity or add one from the Pending Activities section to use your dice!",
