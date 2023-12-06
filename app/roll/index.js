import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";
import SwipeButton from "../../components/SwipeButton";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
import { FontAwesome5 } from "@expo/vector-icons";
import RollDice from "../../components/ProgressScreens/RollDice";
import CompleteDice from "../../components/ProgressScreens/CompleteDice";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState("RollDice"); // Initial state
  const handleData = (data) => {
    // Process the data
    console.log(data);
    setActiveScreen("CompleteDice");
  };
  return (
    <ActivitiesProvider>
      <View style={styles.container}>
        {activeScreen === "RollDice" && <RollDice onData={handleData} />}
        {activeScreen === "CompleteDice" && (
          <CompleteDice />
        )}
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
    backgroundColor: Themes.colors.background,
  },
  subscreenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  competeDice: {
    position: "relative",
  },
});
