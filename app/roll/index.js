import React, { useState, useEffect } from "react";
import { StyleSheet, View, Animated, Easing } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";

export default function Page() {
  const [wiggleAnim] = useState(new Animated.Value(0));

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
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ translateX: wiggleAnim }] }}>
        <DiceComponent style={styles.Dice} />
      </Animated.View>
    </View>
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
