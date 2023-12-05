import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button, Image, StyleSheet, Pressable } from "react-native";
import { ActivitiesContext } from "../contexts/ActivitiesContext";
import Images from "../assets/Themes/Images";
import { Themes } from "../assets/Themes";

const imageSources = [
  Images.diceFaces.one,
  Images.diceFaces.two,
  Images.diceFaces.three,
  Images.diceFaces.four,
  Images.diceFaces.five,
  Images.diceFaces.six,
];

const DiceComponent = ({ onData }) => {
  const sendData = () => {
    const data = currentActivitiesData[currentImageIndex]; // The data you want to send to the grandparent
    onData(data);
  };

  const { activities } = useContext(ActivitiesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
      const interval = setInterval(() => {
        setCurrentImageIndex(() => Math.floor(Math.random() * 6));
      }, 100); // Change image every 500ms

      // Stop cycling after x seconds
      timeout = setTimeout(() => {
        setIsCycling(false);
        //Start Fade
        sendData();
        clearInterval(interval);
      }, 2000);
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
    <View style={styles.container}>
      <Pressable
        style={styles.imageContainer}
        onPress={startCycling}
        disabled={isCycling}
      >
        <Image source={imageSources[currentImageIndex]} style={styles.image} />
      </Pressable>
      {/* <Button
        onPress={startCycling}
        title="Start Cycling"
        disabled={isCycling}
      /> */}
    </View>
  );
};

export default DiceComponent;

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: "40%",
    aspectRatio: 1,
    // borderWidth: 2,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    // borderWidth: 2,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
});
