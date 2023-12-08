import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image, Switch, Pressable } from "react-native";
import Themes from "../assets/Themes/themes.js";

export default function ActivityCircleModal({ isModalVisible, closeModal }) {
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
        <Text style={styles.title}>In Progress</Text>
      
        
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
    fontFamily: "Poppins-Bold",
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
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
