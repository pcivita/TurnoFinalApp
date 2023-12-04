import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Animated } from "react-native";

const DiceComponent = () => {
  const rotateAnim = useState(new Animated.Value(0))[0]; // Initial value for rotation

  const rotateDice = () => {
    // Start the animation
    Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      rotateAnim.setValue(0); // Reset the animation
    });
  };

  // Interpolate rotation values
  const rotateX = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });
  const rotateY = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={{ ...styles.dice, transform: [{ rotateX }, { rotateY }] }}
      >
        <Text style={styles.diceText}> O </Text>
      </Animated.View>
      <Button title="Roll Dice" onPress={rotateDice} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  dice: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20,
  },
  diceText: {
    fontSize: 50,
  },
});

export default DiceComponent;
