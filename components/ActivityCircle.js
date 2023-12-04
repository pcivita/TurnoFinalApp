import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import Kudos from "./Kudos";

import { useState } from "react";

export default function ActivityCircle({ right }) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageText}>
        <View style={styles.imageContainer} right={right}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80, // Keep this Standard
    width: "100%",
    display: "relative",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 0.3,
    borderColor: "grey",
  },
  ImageText: {
    position: "relative",
    flexDirection: "row",
  },
  imageContainer: {
    position: "absolute",
    width: "15%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 2,
    overflow: "hidden",
  },
});
