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
  withSequence,
  useAnimatedGestureHandler,
  runOnJS,
  Easing,
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

const DiceComponent = ({ onData, isInteractive, triggerAnimation }) => {
  const progress = useSharedValue(1);
  const scale = useSharedValue(1);
  const diceTransform = useSharedValue(0);
  const shadowOpacity = useSharedValue(0);

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      // borderRadius: (progress.value * SIZE) / 2,
      transform: [
        // { scale: scale.value },
        { rotate: `${progress.value * 2 * Math.PI}rad` },
        { translateX: diceTransform.value * 5 },
        { translateY: diceTransform.value * 2 },
      ],
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1.5, { duration: 3000 }), -1, true);
    scale.value = withRepeat(withSpring(1), -1, true);
    translateX.value = withRepeat(
      withTiming(5, { duration: 3000, easing: Easing.elastic(10) }),
      -1,
      true
    );
    translateY.value = withRepeat(
      withTiming(2, { duration: 3000, easing: Easing.elastic(10) }),
      -1,
      true
    );
  }, []);

  const sendData = () => {
    // console.log(activities);
    const data = [currentImageIndex, activities[currentImageIndex]]; // The data you want to send to the grandparent
    onData(data);
  };

  const { activities } = useContext(ActivitiesContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // Find the "Current Activities" section and its data

  // const currentActivitiesData = activities;

  const [currentNumber, setCurrentNumber] = useState(1);
  const [isCycling, setIsCycling] = useState(false);
  const [noRoll, setnoRoll] = useState(true);

  useEffect(() => {
    let interval;
    let timeout;

    if (isCycling) {
      // Start cycling numbers every 500ms
      const interval = setInterval(() => {
        setCurrentImageIndex(() =>
          Math.floor(Math.random() * activities.length)
        );
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

    // Roll a number between 1 and the number of activities
    setCurrentImageIndex(() => Math.floor(Math.random() * activities.length));
  };

  const translateX = useSharedValue(0);
  const contextTranslateX = useSharedValue(0);

  const translateY = useSharedValue(0);
  const contextTranslateY = useSharedValue(0);

  const [diceNudge, setDiceNudge] = useState(true);
  const setDice = () => setDiceNudge(false);
  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event) => {
      runOnJS(setDice);
      scale.value = withSpring(1.4);
      shadowOpacity.value = withTiming(1);

      contextTranslateX.value = translateX.value;
      contextTranslateY.value = translateY.value;
    },
    onActive: (event) => {
      // TODO: add rotation?
      translateX.value = event.translationX + contextTranslateX.value;
      translateY.value = event.translationY + contextTranslateY.value;
    },
    onEnd: (event) => {
      scale.value = withSpring(0.5);
      runOnJS(startCycling)();

      progress.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
        { rotate: "0rad" },
      ],
    };
  });
  

  const shadowStyle = useAnimatedStyle(() => {
    return {
      opacity: shadowOpacity.value,
      shadowOpacity: shadowOpacity.value,

      position: 'absolute',
      width: 200,
      height: 200,
      left: 5,
      borderRadius: 20,
      backgroundColor: "black",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 20,
      },
      shadowRadius: 15,
      elevation: 24,
    };
  });
  

  useEffect(() => {
    if (!isInteractive) {
      translateX.value = withTiming(0, { duration: 1000, easing: Easing.linear });
      translateY.value = withTiming(0, { duration: 1000, easing: Easing.linear });
      scale.value = withTiming(1, { duration: 1000, easing: Easing.linear });
      // shadowOpacity.value = withTiming(0, { duration: 2000 }); // Reset to no opacity
    } else {
      progress.value = withRepeat(withSpring(1.5, { duration: 3000 }), -1, true);
      // scale.value = withRepeat(withSpring(1), -1, true);
  
      translateX.value = withRepeat(
        withTiming(5, { duration: 3000, easing: Easing.elastic(10) }),
        -1,
        true
      );
      translateY.value = withRepeat(
        withTiming(2, { duration: 3000, easing: Easing.elastic(10) }),
        -1,
        true
      );
      }
      // scale.value = withRepeat(
      //   // withSequence(
      //     withTiming(1, { duration: 3000, easing: Easing.elastic(1) }),
      //     withTiming(0.9, { duration: 3000, easing: Easing.elastic(1) })
      //   // ),
      //   -1,
      //   true
      // );
      // shadowOpacity.value = withRepeat(
      //   // withSequence(
      //     withTiming(0.7, { duration: 3000, easing: Easing.elastic(1) }),
      //     withTiming(0, { duration: 3000, easing: Easing.elastic(1) })
      //   // ),
      //   -1,
      //   true
      // );
  }, [isInteractive]);

  useEffect(() => {
    if (isCycling) {
      // Animate the shadow opacity to full as the dice rolls
      shadowOpacity.value = withTiming(0, { duration: 900 });
    } else {
      // Reset the shadow opacity when the dice stops rolling
      shadowOpacity.value = withTiming(0.8, { duration: 900 });
    }
  }, [isCycling]);


  //TODO: REMEMBER rStyle vs reanimatedStyle
  return (
    <View style={[styles.container]}>
      <PanGestureHandler onGestureEvent={panGestureEvent} enabled={isInteractive ? true : false}>
        <Animated.View style={[styles.square, rStyle]}>
          <Animated.View style={[styles.square, shadowStyle]} />
          <Image source={imageSources[currentImageIndex]} style={styles.image} />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default DiceComponent;

const styles = StyleSheet.create({
  container: {
    height: "65%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 20,
  },
  imageContainer: {
    width: "100%",
    height: "100%",
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: "100%",
  },
  // disabled: {
  //   tintColor: Themes.colors.salmonLight
  // },
  square: {
    width: 210,
    height: 210,
  },
  shadow: {
    backgroundColor: "black"
  }
});
