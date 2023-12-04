import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button } from "react-native";
import { ActivitiesContext } from "../contexts/ActivitiesContext";

const CyclingNumbers = () => {
  const { activities } = useContext(ActivitiesContext);

  // Find the "Current Activities" section and its data
  const currentActivitiesSection = activities.find(
    (activity) => activity.title === "Current Activities"
  );
  const currentActivitiesData = currentActivitiesSection
    ? currentActivitiesSection.data
    : [];

  const [currentNumber, setCurrentNumber] = useState(1);
  const [isCycling, setIsCycling] = useState(false);

  useEffect(() => {
    let interval;
    let timeout;

    if (isCycling) {
      // Start cycling numbers every 500ms
      interval = setInterval(() => {
        setCurrentNumber(() => Math.floor(Math.random() * 6) + 1);
      }, 2);

      // Stop cycling after 3 seconds
      timeout = setTimeout(() => {
        setIsCycling(false);
        clearInterval(interval);
      }, 1000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isCycling]);

  const startCycling = () => {
    setIsCycling(true);
  };

  return (
    <View>
      <Text>{currentNumber}</Text>
      <Text>{currentActivitiesData[currentNumber - 1]}</Text>
      <Button
        onPress={startCycling}
        title="Start Cycling"
        disabled={isCycling}
      />
    </View>
  );
};

export default CyclingNumbers;
