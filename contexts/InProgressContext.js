import React, { createContext, useState } from "react";

// Create the context
export const InProgressContext = createContext();

// Create a provider component
export const InProgressProvider = ({ children }) => {
  const [inProgress, setinProgress] = useState(false);

  // Function to add a new activity
  const flipProgress = () => setinProgress(!inProgress);

  return (
    <InProgressContext.Provider value={{ flipProgress, inProgress }}>
      {children}
    </InProgressContext.Provider>
  );
};

export default InProgressProvider;
