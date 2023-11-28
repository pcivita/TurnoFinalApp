import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    {
      title: "Current Activities",
      data: [
        ["Soccer", "Soccer description", "Exercise"], 
        ["Write", "Write description", "Work"], 
        ["Read", "Read description", "Academic"], 
        ["Meditate", "Meditate description", "Relax"], 
        ["Have fun", "Have fun description", "Social"], 
        ["Clean house", "Clean house description", "Chore"]
      ],
      noActivitiesMessage:
        "You have no Current Activities.\n\nCreate an activity or add one from the Pending Activities section to use your dice!",
    },
    {
      title: "Pending Activities",
      data: [
        ["Paint", "Paint description", "Relax"], 
        ["Dishes", "Dishes description", "Chore"],
      ],
      noActivitiesMessage:
        "You have no Pending Activities.\n\nUse the Create Activity button to create new activities for later as you think of them!",
    },
  ]);

  // Function to add a new activity to Pending Activities
  const addPendingActivity = (name, description, category ) => {
    setActivities((prevActivities) => {
      let updatedActivities = [...prevActivities];
      let newActivity = [name, description, category];

      const currentIndex = 0;
      const pendingIndex = 1;
      // Add to current activities if there is room. Otherwise add to pending
      if (!prevActivities[currentIndex].data || prevActivities[currentIndex].data.length < 6) {
        updatedActivities[currentIndex] = {
          ...updatedActivities[currentIndex],
          data: [...updatedActivities[currentIndex].data, newActivity],
        };
      } else {
        updatedActivities[pendingIndex] = {
          ...updatedActivities[pendingIndex],
          data: [newActivity, ...updatedActivities[pendingIndex].data],
        };
      }
      return updatedActivities;
    });
  };

  return (
    <ActivitiesContext.Provider value={{ activities, addPendingActivity }}>
      {children}
    </ActivitiesContext.Provider>
  );
};

export default ActivitiesProvider;
