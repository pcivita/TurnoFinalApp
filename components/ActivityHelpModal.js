import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Switch, Pressable } from "react-native";
import Images from "../assets/Themes/Images/index.js";
import { useFonts } from "expo-font";
import PostPreview from "./PostPreview.js";
import Themes from "../assets/Themes/themes.js";
import Fire from "./Icons/Fire.js";
import { FontAwesome5 } from "@expo/vector-icons";
import Supabase from "../Supabase.js";
import { PostsContext } from "../contexts/PostsContext.js";
import { ActivitiesContext } from "../contexts/ActivitiesContext.js";
// import { TouchableOpacity } from "react-native-gesture-handler";

export default function ActivityHelpModal({ isModalVisible, closeHelpModal }) {
  return (
    <Modal
      onBackdropPress={closeHelpModal}
      onBackButtonPress={closeHelpModal}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={closeHelpModal}
      // animationIn="bounceInUp"
      // animationOut="bounceOutDown"
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.barIcon} />
        <Text style={styles.title}>How to add or edit activities</Text>
      
        
        <View style={styles.buttonsContainer}>
          <Pressable onPress={closeHelpModal}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Done</Text>
            </View>
          </Pressable>
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
    height: 730,
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
    fontFamily: "Poppins-Bold",
  },
  statsContainer: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  stat: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
    maxWidth: "50%",
  },
  circle: {
    width: 150,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 90,
    borderWidth: 6,
    borderColor: Themes.colors.salmon,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
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
  buttonsContainer: {
    height: 70,
    flexDirection: "row",
    gap: 50,
    padding: 10,
  },
  buttonContainer: {
    backgroundColor: Themes.colors.salmon,
    width: 120,
    height: "90%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
});
