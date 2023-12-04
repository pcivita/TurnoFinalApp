import React from "react";
import { View, StyleSheet, Button } from "react-native";
import { Themes } from "../assets/Themes";
import Animated, { useSharedValue, withTiming, useAnimatedStyle, Easing } from 'react-native-reanimated';

export default function Dice() {

  // const rotateY = useSharedValue(0);

  // const animatedStyle = useAnimatedStyle(() => {
  //   return {
  //     transform: [
  //       { perspective: 1000 },
  //       { rotateY: `${rotateY.value}deg` },
  //     ],
  //   };
  // });

  // const handlePress = () => {
  //   rotateY.value = withTiming(180, { duration: 1000, easing: Easing.ease });
  // };

  return (
    // <View style={styles.container}>
      <Animated.View style={[styles.diceContainer]}>
        <View style={[styles.diceFace, styles.faceFront]} />
        <View style={[styles.diceFace, styles.faceBack]} />
        <View style={[styles.diceFace, styles.faceTop]} />
        <View style={[styles.diceFace, styles.faceBottom]} /> 
        <View style={[styles.diceFace, styles.faceRight]} /> 
        <View style={[styles.diceFace, styles.faceLeft]} />
      </Animated.View>
    // </View>
  );
}

const styles = StyleSheet.create({
  diceContainer: {
    backgroundColor: Themes.colors.mediumGray, // remove later
    width: "100%",
    aspectRatio: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 5,
    // borderColor: "blue",
  },
  // dice: {
  //   width: "100%",
  //   aspectRatio: 1,
  //   // position: "relative",
  //   // marginRight: 50,
  //   // transformStyle: "preserve-3d",
  //   // flex: 1,
  // },
  diceFace: {
    backgroundColor: Themes.colors.salmon,
    position: "absolute",
    width: "100%",
    aspectRatio: 1,
    borderRadius: 30,
    borderWidth: 5,
    borderColor: "black",
  },
  // faceFront: {
  //   transform: [{ translateZ: 50 }],
  // },
  // faceBack: {
  //   transform: [{ rotateX: "180deg" }, { translateZ: 50 }],
  // },
  // faceTop: {
  //   transform: [{ rotateX: "90deg" }, { translateZ: 50 }],
  // },
  // faceBottom: {
  //   transform: [{ rotateX: "-90deg" }, { translateZ: 50 }],
  // },
  // faceRight: {
  //   transform: [{ rotateY: "90deg" }, { translateZ: 50 }],
  // },
  // faceLeft: {
  //   transform: [{ rotateY: "-90deg" }, { translateZ: 50 }],
  // },
});

