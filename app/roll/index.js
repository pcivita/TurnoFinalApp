import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";
import SwipeButton from "../../components/SwipeButton";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Page() {
  const [wiggleAnim] = useState(new Animated.Value(0));
  const onToggle = () => {
    console.log("WORKED!!!");
  };

  return (
    <ActivitiesProvider>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.banner}>
            <FontAwesome5
              name="dice-five"
              style={styles.headerDice}
              size={30}
              color={"white"}
              transform={[{ rotate: "45deg" }]}
            />
            <Text style={styles.title}>Roll</Text>
            <FontAwesome5
              name="cog"
              style={styles.headerDice}
              size={30}
              color={"white"}
              transform={[{ rotate: "45deg" }]}
            />
          </View>
        </View>
        <View style={styles.screenContainer}>
          <View styles={styles.upperTextContainer}>
            <Text style={styles.upperText}>
              Roll the dice for an Activity!{" "}
            </Text>
          </View>

          <DiceComponent style={styles.Dice} />

          <SwipeButton onToggle={onToggle} />
        </View>
      </View>
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

    backgroundColor: Themes.colors.blue,
  },
  screenContainer: {
    flex: 1,
    gap: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  upperTextContainer: {
    width: "60%",

    borderWidth: 2,
  },
  upperText: {
    color: Themes.colors.background,
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
