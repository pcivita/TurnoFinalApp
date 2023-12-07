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

import { useEffect, useState } from "react";

export default function ActivityCircle({ right, top, status, index }) {
  const categories = [
    "running",
    "cat",
    "user-friends",
    "briefcase",
    "graduation-cap",
    "broom",
  ];
  const scale = useSharedValue(1);
  const rotation = useSharedValue(1);
  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { rotate: `${rotation.value * 2 * Math.PI}rad` },
      ],
    };
  });
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

  useEffect(() => {
    scale.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true);
    rotation.value = withRepeat(withTiming(1.5, { duration: 1000 }), -1, true);
  });

  return (
    <View style={[styles.container, { height: top }]}>
      <Animated.View
        style={[
          [styles.circle, colorStyle],
          status === "in progress"
            ? reanimatedStyle
            : [styles.circle, colorStyle],
        ]}
        right={right}
      >
        {status === "complete" && (
          <FontAwesome5
            style={styles.icon}
            name={categories[index]}
            size={40}
            color={Themes.colors.background}
          />
        )}
        {status === "in progress" && (
          <FontAwesome5
            style={styles.icon}
            name={"dice-five"}
            size={40}
            color={Themes.colors.background}
          />
        )}
      </Animated.View>
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
