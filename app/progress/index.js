import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { Themes } from "../../assets/Themes";
import { useContext, useState } from "react";
import Journey from "../../components/ProgressScreens/Journey";
import Stats from "../../components/ProgressScreens/Stats";
import Header from "../../components/Header";
import ProgressNavigation from "../../components/ProgressNavigation";
import { InProgressContext } from "../../contexts/InProgressContext";

export default function Page() {
  const [activeScreen, setActiveScreen] = useState("Stats"); // Initial state
  handleData = (data) => {
    setActiveScreen(data);
  };
  return (
    <View style={styles.container}>
      <Header title="Progress" />
      <View style={styles.buttonContainer}>
        <ProgressNavigation onData={handleData} />
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
    marginTop: 16,
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: Themes.colors.background,
  },
  container: {
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
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDice: {},
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  subscreenContainer: {
    flex: 1,
    position: "relative",
    width: "100%",
    height: "100%",
  },
});
