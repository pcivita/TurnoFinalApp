import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Easing, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { PostsProvider } from "../../contexts/PostsContext";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
import { FontAwesome5 } from "@expo/vector-icons";
import RollDice from "../../components/ProgressScreens/RollDice";
import CompleteDice from "../../components/ProgressScreens/CompleteDice";
import ActvityRollled from "../../components/ActivityRolled";
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
  const [appearHeader, setAppearHeader] = useState(false);
  const progress1 = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      opacity: progress1.value,
    };
  }, []);

  const [activeScreen, setActiveScreen] = useState("RollDice"); // Initial state
  const [diceNum, setDiceNum] = useState(-1);
  const [activityName, setActivityName] = useState("");
  const startAnimation = () => {
    // Wait for 1.5 seconds (1500 milliseconds) before starting the animation
    setTimeout(() => {
      progress1.value = withTiming(
        0,
        {
          duration: 500, // Animation duration
        },
        (isFinished) => {
          if (isFinished) {
            runOnJS(setActiveScreen)("CompleteDice");
            progress1.value = withTiming(1, {
              duration: 500, // Animation duration
            });
          }
        }
      );
    }, 1500);
  };

  const headerBounce = () => {
    progress.value = withSpring(130);
  };

  const progress = useSharedValue(0);

  const rStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: progress.value }],
    };
  }, []);

  const handleData = (data) => {
    console.log(data);
    setDiceNum(data[0]);
    setActivityName(data[1][0]);
    setAppearHeader(true);
    headerBounce();
    startAnimation();
  };

  //TODO: Dice shouldn't be clickable after rolling
  return (
    <ActivitiesProvider>
      {appearHeader && (
        <Animated.View style={[styles.square, rStyle2]}>
          <ActvityRollled diceNum={diceNum} activityName={activityName} />
        </Animated.View>
      )}
      <Animated.View style={[styles.container, rStyle]}>
        {activeScreen === "RollDice" && <RollDice onData={handleData} />}
        {activeScreen === "CompleteDice" && (
          <CompleteDice
            setActiveScreen={setActiveScreen}
            setAppearHeader={setAppearHeader}
            activityName={activityName}
            activityIndex={diceNum}
          />
        )}
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
    color: "red",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
  },
});
