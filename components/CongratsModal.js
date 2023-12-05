import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Switch } from "react-native";
import Images from "../assets/Themes/Images/index.js";
import { useFonts } from "expo-font";
import PostPreview from "./PostPreview.js";
import Themes from "../assets/Themes/themes.js";

export default function CongratsModal({ isModalVisible, setModalVisible, switchEnabled, setSwitchEnabled }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={() => setModalVisible(false)}
      // animationIn="bounceInUp"
      // animationOut="bounceOutDown"
      animationInTiming={800}
      animationOutTiming={500}
      backdropTransitionInTiming={800}
      backdropTransitionOutTiming={500}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.barIcon} />
        <Image source={Images.confetti} style={styles.confetti} />
        <Text style={styles.title}>Congrats!</Text>
        <PostPreview />
        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <View style={styles.circle}>
              {/* {iconComponent} */}
              <Text style={styles.circleText}>stat1</Text>
            </View>
            <Text style={styles.circleDescription}>description</Text>
          </View>
          <View style={styles.stat}>
            <View style={styles.circle}>
              {/* {iconComponent} */}
              <Text style={styles.circleText}>stat1</Text>
            </View>
            <Text style={styles.circleDescription}>description</Text>
          </View>
        </View>
        <View style={styles.toggleContainer}>
          <Text> Add "Go for a run" back to Activities List?</Text>
          <Switch
            trackColor={{true: Themes.colors.salmon}}
            thumbColor={"white"}
            ios_backgroundColor={Themes.colors.mediumGray}
            onValueChange={() => setSwitchEnabled(!switchEnabled)}
            value={switchEnabled}
          />
        </View>
        <View style={styles.buttonsContainer}>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    // paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // minHeight: 600,
    height: 600,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  confetti: {
    position: "absolute",
    top: 5,
  },
  title: {
    fontSize: 24,
    marginVertical: 20,
    fontFamily: "Poppins-Bold"
  },
  statsContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  stat: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  circle: {
    width: 150,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 90,
    borderWidth: 6,
    borderColor: Themes.colors.salmon,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    fontSize: 40,
    fontFamily: "Poppins-Regular",
  },
  circleDescription: {
    fontSize: 15,
    // lineHeight: 30,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
  },
  toggleContainer: {
    width: "102%",
    marginTop: 45,
    padding: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  addCommentButton: {
    alignSelf: "center", // Center the button
    marginTop: 10,
    padding: 10,
    backgroundColor: "blue", // Change color as needed
    borderRadius: 5,
  },
  addCommentButtonText: {
    color: "white", // Change color as needed
  },
});
