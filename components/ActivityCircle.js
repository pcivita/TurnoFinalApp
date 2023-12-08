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
import { useEffect, useState, useContext } from "react";
import { InProgressContext } from "../contexts/InProgressContext";

export default function ActivityCircle({
  right,
  top,
  status,
  index,
  onPress,
  flipping,
  category,
}) {
  const categories = [
    "running",
    "cat",
    "user-friends",
    "briefcase",
    "graduation-cap",
    "broom",
  ];
  const { inProgress } = useContext(InProgressContext);
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

  let colorStyle = styles.incompleteColor;
  if (status === "complete") {
    colorStyle = styles.completeColor;
  }
  if (status === "in progress") {
    colorStyle = styles.progressColor;
  }

  // useEffect(() => {
  //   scale.value = withRepeat(withTiming(1.1, { duration: 1000 }), -1, true);
  //   rotation.value = withRepeat(withTiming(1.5, { duration: 1000 }), -1, true);
  // });
  useEffect(() => {
    const scaleAnimation = withRepeat(
      withTiming(1.1, { duration: 1000 }),
      -1,
      true
    );
    const rotationAnimation = withRepeat(
      withTiming(1.5, { duration: 1000 }),
      -1,
      true
    );

    scale.value = scaleAnimation;
    rotation.value = rotationAnimation;

    return () => {
      // Cleanup animations when the component unmounts
      scale.value = withTiming(1);
      rotation.value = withTiming(1);
    };
  }, []);

  // console.log('onPress prop:', onPress);

  return (
    <View style={[styles.container, { height: top }]}>
      <TouchableOpacity onPress={onPress}>
        <Animated.View
          style={[
            [styles.circle, colorStyle],
            status === "in progress" && (inProgress || flipping)
              ? reanimatedStyle
              : [styles.circle, colorStyle],
          ]}
          right={right}
        >
          {status === "complete" && (
            <FontAwesome5
              style={styles.icon}
              name={categories[category]}
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
      </TouchableOpacity>
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
