import React, { useState, useEffect, useContext } from "react";
import { StyleSheet, View, Animated, Easing, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../../components/DiceComponent";
import SwipeButton from "../../components/SwipeButton";
import { ActivitiesProvider } from "../../contexts/ActivitiesContext";
import { FontAwesome5 } from "@expo/vector-icons";
import RollDice from "../../components/subscreens/RollDice";
import CompleteDice from "../../components/subscreens/CompleteDice";

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

        <View style={styles.subscreenContainer}>
          {activeScreen === "RollDice" && <RollDice onData={handleData} />}
          {activeScreen === "CompleteDice" && (
            <CompleteDice style={styles.competeDice} />
          )}
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
  subscreenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  competeDice: {
    position: "relative",
  },
});
