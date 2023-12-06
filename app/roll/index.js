import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Easing, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";
import SwipeButton from "../../components/SwipeButton";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
import { FontAwesome5 } from "@expo/vector-icons";
import RollDice from "../../components/ProgressScreens/RollDice";
import CompleteDice from "../../components/ProgressScreens/CompleteDice";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";

export default function Page() {
  const progress = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
    };
  }, []);

  const [activeScreen, setActiveScreen] = useState("RollDice"); // Initial state

  const startAnimation = () => {
    // Wait for 1.5 seconds (1500 milliseconds) before starting the animation
    setTimeout(() => {
      progress.value = withTiming(
        0,
        {
          duration: 500, // Animation duration
        },
        (isFinished) => {
          if (isFinished) {
            runOnJS(setActiveScreen)("CompleteDice");
            progress.value = withTiming(1, {
              duration: 500, // Animation duration
            });
          }
        }
      );
    }, 1500);
  };

  const handleData = (data) => {
    console.log(data);
    startAnimation();
    // setActiveScreen will be called after the animation completes
  };

  //TODO: Dice shouldn't be clickable after rolling
  return (
    <ActivitiesProvider>
      <Animated.View style={[styles.container, rStyle]}>
        {activeScreen === "RollDice" && <RollDice onData={handleData} />}
        {activeScreen === "CompleteDice" && <CompleteDice />}
      </Animated.View>
    </ActivitiesProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    height: "14%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
  },
  banner: {
    paddingHorizontal: 20,
    // borderWidth: 2,
    // borderColor: "blue",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDice: {
    // borderWidth: 2,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  subscreenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  competeDice: {},
  square: {
    position: "absolute",
    bottom: 50,
    height: 100,
    width: "100%",
  },
});
