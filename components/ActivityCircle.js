import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import Kudos from "./Icons/Kudos";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";

import { useState } from "react";

export default function ActivityCircle({ right, top, status }) {
  const categories = [
    ["Exercise", "running"],
    ["Relax", "cat"],
    ["Social", "user-friends"],
    ["Work", "briefcase"],
    ["Academic", "graduation-cap"],
    ["Chore", "broom"],
  ];

  let colorStyle = styles.incompleteColor;
  if (status === "complete") {
    colorStyle = styles.completeColor;
  }
  if (status === "in progress") {
    colorStyle = styles.progressColor;
  }

  return (
    <View style={[styles.container, { height: top }]}>
      <View style={[styles.circle, colorStyle]} right={right}>
        {status === "complete" && (
          <FontAwesome5
            style={styles.icon}
            name={"user-friends"}
            size={30}
            color={Themes.colors.background}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: "15%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,

    backgroundColor: Themes.colors.mediumGray,
    justifyContent: "center",

    shadowOpacity: 0.3,
    shadowOffset: { height: 2 },
  },
  completeColor: {
    backgroundColor: Themes.colors.salmon,
  },
  progressColor: {
    backgroundColor: Themes.colors.salmonLight,
  },
  icon: {
    alignSelf: "center",
  },
});
