import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native";
import SwipeButton from "../SwipeButton";
import Journey from "./Journey";
import { Themes } from "../../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";
import DiceComponent from "../DiceComponent";
import { useState } from "react";
import ActivityCircle from "../ActivityCircle";
import CongratsModal from "../CongratsModal";

export default function CompleteDice() {
  const [swipeComplete, setSwipeComplete] = useState(false);

  const onToggle = () => {
    setSwipeComplete(!swipeComplete);
  };

  console.log("swipe complete: " + swipeComplete);
  const [isModalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.banner}>
          <Text> Your activity is: </Text>
        </View>
      </View>
      <Journey style={styles.journey} />
      <View style={styles.buttonContainer}>
        <SwipeButton onToggle={onToggle} style={styles.swipeButton} />
      </View>
      <CongratsModal 
        isModalVisible={isModalVisible}
        // toggleModal={toggleModal}
        setModalVisible={setModalVisible}
      />
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
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    position: "absolute",
    bottom: 40
  },
  buttonText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    color: Themes.colors.background,
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
    height: "100%",
    // backgroundColor: "black"
  },
});
