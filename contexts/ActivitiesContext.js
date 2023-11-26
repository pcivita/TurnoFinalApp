import React, { createContext, useState } from "react";

// Create the context
export const ActivitiesContext = createContext();

// Create a provider component
export const ActivitiesProvider = ({ children }) => {
  const [activities, setActivities] = useState([
    {
      title: "Current Activities",
      data: ["Read", "Write", "Have Fun", "Soccer", "Meditate", "Yoga"],
      noActivitiesMessage:
        "You have no Current Activities. Add activities from the Pending Activities section to use your dice!",
    },
    {
      title: "Pending Activities",
      data: ["Pending", "Pending"],
      noActivitiesMessage:
        "You have no Pending Activities. If you ever have ideas for future activities you want to do, use the Create Activity button to create them!",
    },
  ]);

  // Function to add a new activity to Pending Activities
  const addPendingActivity = (newActivity) => {
    setActivities((prevActivities) => {
      // Clone the previous state
      let updatedActivities = [...prevActivities];

      // Find the index of "Pending Activities"
      const pendingIndex = updatedActivities.findIndex(
        (activity) => activity.title === "Pending Activities"
      );

      // Safely check if "Pending Activities" exists and update its data array
      if (pendingIndex !== -1) {
        updatedActivities[pendingIndex] = {
          ...updatedActivities[pendingIndex],
          data: [...updatedActivities[pendingIndex].data, newActivity],
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
