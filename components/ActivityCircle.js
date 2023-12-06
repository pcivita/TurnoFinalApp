import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import Kudos from "./Icons/Kudos";
import { Themes } from "../assets/Themes";

import { useState } from "react";

export default function ActivityCircle({ right, status }) {
  let colorStyle = styles.incompleteColor;
  if (status === "complete") {
    colorStyle = styles.completeColor;
  }
  if (status === "in progress") {
    colorStyle = styles.progressColor;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.circle, colorStyle]} right={right}>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "grey",
  },
  circle: {
    width: "15%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
    backgroundColor: Themes.colors.mediumGray
  },
  completeColor: {
    backgroundColor: Themes.colors.salmon
  },
  progressColor: {
    backgroundColor: Themes.colors.salmonLight
  }
});
