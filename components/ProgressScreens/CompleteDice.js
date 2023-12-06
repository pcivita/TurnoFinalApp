import React from "react";
import { View, StyleSheet, Text } from "react-native";
import SwipeButton from "../SwipeButton";
import Journey from "./Journey";

export default function CompleteDice() {
  const onToggle = () => {
    console.log("Hello");
  };

  return (
    <View>
      <Journey />

      <SwipeButton onToggle={onToggle} style={styles.swipeButton} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  Journey: {},
  swipeButton: {},
});
