import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Themes } from "../../assets/Themes";
import { Link } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import Journey from "../../components/ProgressScreens/Journey";
import Stats from "../../components/ProgressScreens/Stats";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState("none"); // Initial state

  return (
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
          <Text style={styles.title}>Progress</Text>
          <FontAwesome5
            name="cog"
            style={styles.headerDice}
            size={30}
            color={"white"}
            transform={[{ rotate: "45deg" }]}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActiveScreen("Stats")}
        >
          <Text style={styles.buttonText}>Stats</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setActiveScreen("Journey")}
        >
          <Text style={styles.buttonText}>Journey</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subscreenContainer}>
        {activeScreen === "Journey" && <Journey />}
        {activeScreen === "Stats" && <Stats />}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Themes.colors.blue,
    borderRadius: 20,
    height: 60,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonContainer: {
    display: "flex",
    gap: 16,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: Themes.colors.background,
  },
  container: {
    gap: 16,
    flex: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: "15%",
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
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  subscreenContainer: {
    flex: 1,
    // borderWidth: 2,
    position: "relative",
    width: "100%",
  },
});
