import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Switch, Pressable } from "react-native";
import Themes from "../assets/Themes/themes.js";

export default function ActivityCircleModal({
  modalCategory,
  modalStatus,
  isModalVisible,
  closeModal,
}) {
  //Provisory
  let activityName = "Soccer";

  return (
    <Modal
      onBackdropPress={closeModal}
      onBackButtonPress={closeModal}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={closeModal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        {/* <View style={styles.barIcon} /> */}
        <Text style={styles.title}>
          {modalStatus === "complete"
            ? "You Completed: "
            : "You Have an activity in progress: "}
        </Text>
        <View style={styles.activityTextContainer}>
          <Text style={styles.activityName}>
            {modalStatus === "complete"
              ? "Run Around Lake Lag with Matt!"
              : "Your Current Activity!"}
          </Text>
        </View>

        <View style={styles.buttonsContainer}>
          <Pressable onPress={closeModal}>
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
  activityTextContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 16,
  },
  activityName: {
    fontFamily: "Poppins-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  modal: {
    justifyContent: "center",
    alignItems: "center",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 12,
    borderRadius: 20,
    height: 300,
    width: 300,
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
  title: {
    fontSize: 24,
    marginVertical: 20,
    marginHorizontal: 12,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },

  buttonContainer: {
    backgroundColor: Themes.colors.salmon,
    width: 120,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  buttonText: {
    color: "white",
    fontFamily: "Poppins-Bold",
    fontSize: 24,
  },
});
