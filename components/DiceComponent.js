import React, { useState, useEffect, useContext } from "react";
import { Text, View, Button, Image, StyleSheet, Pressable } from "react-native";
import { ActivitiesContext } from "../contexts/ActivitiesContext";
import Images from "../assets/Themes/Images";
import { Themes } from "../assets/Themes";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

const imageSources = [
  Images.diceFaces.one,
  Images.diceFaces.two,
  Images.diceFaces.three,
  Images.diceFaces.four,
  Images.diceFaces.five,
  Images.diceFaces.six,
];

const DiceComponent = ({ onData }) => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      // borderRadius: (progress.value * SIZE) / 2,
      transform: [
        // { scale: scale.value },
        // { rotate: `${progress.value * 2 * Math.PI}rad` },
        { translateX: scale.value * 20 },
        { translateY: scale.value * 20 },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1.5, { duration: 3000 }), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
  }, []);

  const sendData = () => {
    const data = [currentImageIndex, currentActivitiesData[currentImageIndex]]; // The data you want to send to the grandparent
    onData(data);
  };

  const { activities } = useContext(ActivitiesContext);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Find the "Current Activities" section and its data
  const currentActivitiesSection = activities.find(
    (activity) => activity.title === "Current Activities"
  );
  const currentActivitiesData = currentActivitiesSection
    ? currentActivitiesSection.data
    : [];

  const [currentNumber, setCurrentNumber] = useState(1);
  const [isCycling, setIsCycling] = useState(false);
  const [noRoll, setnoRoll] = useState(true);

  useEffect(() => {
    let interval;
    let timeout;

    if (isCycling) {
      // Start cycling numbers every 500ms
      const interval = setInterval(() => {
        setCurrentImageIndex(() => Math.floor(Math.random() * 6));
      }, 100); // Change image every 500ms

      // Stop cycling after x seconds
      timeout = setTimeout(() => {
        setIsCycling(false);
        //Start Fade
        clearInterval(interval);
      }, 2000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [isCycling]);

  useEffect(() => {
    if (!isCycling && !noRoll) {
      // Only send data when cycling has stopped
      sendData();
    }
  }, [isCycling, currentImageIndex]); // Add currentImageIndex as a dependency

  const startCycling = () => {
    setIsCycling(true);
    setnoRoll(false);
  };

  const translateX = useSharedValue(0);
  const contextTranslateX = useSharedValue(0);

  const translateY = useSharedValue(0);
  const contextTranslateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event) => {
      scale.value = withSpring(1.5);
      contextTranslateX.value = translateX.value;
      contextTranslateY.value = translateY.value;
    },
    onActive: (event) => {
      translateX.value = event.translationX + contextTranslateX.value;
      translateY.value = event.translationY + contextTranslateY.value;
    },
    onEnd: (event) => {
      scale.value = withSpring(0.5);
      runOnJS(startCycling)();
    },
  });
  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  //TODO: REMEMBER rStyle vs reanimatedStyle
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={[styles.square, rStyle]}>
          {/* <Pressable
            style={styles.imageContainer}
            onPress={startCycling}
            disabled={isCycling}
          > */}
          <Image
            source={imageSources[currentImageIndex]}
            style={styles.image}
          />
          {/* </Pressable> */}
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default DiceComponent;

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: "40%",
    aspectRatio: 1,
    // borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    height: "100%",
    // borderWidth: 2,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  square: {
    width: 200,
    height: 200,
  },
});
