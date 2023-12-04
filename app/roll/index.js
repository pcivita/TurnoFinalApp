import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";
import SwipeButton from "../../components/SwipeButton";

import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
export default function Page() {
  const [wiggleAnim] = useState(new Animated.Value(0));
  const onToggle = () => {
    console.log("WORKED!!!");
  };
  useEffect(() => {
    const startWiggle = () => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(wiggleAnim, {
            toValue: 10,
            duration: 200, // Adjusted duration
            easing: Easing.linear, // Easing function for smoother animation
            useNativeDriver: true,
          }),
          Animated.timing(wiggleAnim, {
            toValue: -10,
            duration: 200,
            easing: Easing.linear,
            useNativeDriver: true,
          }),

          Animated.delay(1000),
        ])
      ).start();
    };

    startWiggle();
  }, [wiggleAnim]);

  return (
    <ActivitiesProvider>
      <View style={styles.container}>
        <DiceComponent style={styles.Dice} />

        <SwipeButton onToggle={onToggle} />
      </View>
    </ActivitiesProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: Themes.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  Dice: {
    width: "100%",
    height: 20,
    borderWidth: 2,
    borderColor: "red",
  },
});
