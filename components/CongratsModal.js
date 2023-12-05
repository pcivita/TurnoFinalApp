import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import { View, Text, StyleSheet, Image
} from "react-native";
import Images from "../assets/Themes/Images/index.js";
import { useFonts } from "expo-font";
import PostPreview from "./PostPreview.js";

export default function CongratsModal({ isModalVisible, toggleModal, setModalVisible }) {
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
        {/* </View> */}
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
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
  commentsList: {
    height: "100%",
    backgroundColor: "green",
  },
  scrollView: {
    width: "95%",
    // backgroundColor: "green",
  },
  inputContainer: {
    height: 100,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 150,
    paddingHorizontal: 10,
    width: "100%", // Adjust width as needed
    alignSelf: "center", // Center the TextInput
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
