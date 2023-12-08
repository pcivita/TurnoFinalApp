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

        <Text style={styles.title}>
          Turno only allows you to have 6 activities at a time... So choose
          wisely!
        </Text>
        <View style={styles.h1Container}>
          <Text style={styles.h1}>
            To add an activity, simply click on an empty slot's plus icon.
          </Text>
        </View>
        <View style={styles.h1Container}>
          <Text style={styles.h1}>
            Clicking on an already made activity allows you to edit it and
            delete it!
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable onPress={closeHelpModal}>
            <View style={styles.buttonContainer}>
              <Text style={styles.buttonText}>Got it!</Text>
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
    paddingHorizontal: 20,
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
    textAlign: "center",
    fontSize: 24,
    marginVertical: 20,
    fontFamily: "Poppins-Bold",
  },
  h1: {
    fontSize: 17,
    color: Themes.colors.background,
    fontFamily: "Poppins-Bold",
  },
  h1Container: {
    backgroundColor: Themes.colors.salmonLight,
    padding: 12,
    borderRadius: 16,
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
