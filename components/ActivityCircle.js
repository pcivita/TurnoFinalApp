import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import Kudos from "./Icons/Kudos";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";

import { useState } from "react";

export default function ActivityCircle({ right, top, status, index }) {
  const categories = [
    "running",
    "cat",
    "user-friends",
    "briefcase",
    "graduation-cap",
    "broom",
  ];

  // const reanimatedStyle = useAnimatedStyle(() => {
  //   return {
  //     // borderRadius: (progress.value * SIZE) / 2,
  //     transform: [
  //       // { scale: scale.value },
  //       // { rotate: `${progress.value * 2 * Math.PI}rad` },
  //       { translateX: scale.value * 20 },
  //       { translateY: scale.value * 20 },
  //     ],
  //   };
  // }, []);

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
            name={categories[index]}
            size={30}
            color={Themes.colors.background}
          />
        )}
        {status === "in pro"}
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
    marginVertical: 10,
  },
  circle: {
    width: "20%",
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
    backgroundColor: Themes.colors.blue,
  },
  icon: {
    alignSelf: "center",
  },
});
