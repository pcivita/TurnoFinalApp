import Modal from "react-native-modal";
import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Image,
} from "react-native";
import Comment from "./Comment.js";
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";
import Themes from "../assets/Themes/themes.js";
import { FontAwesome5 } from "@expo/vector-icons";

export default function CommentModal({
  isModalVisible,
  toggleModal,
  setModalVisible,
}) {
  const comments = [
    ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
    ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
    // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
    // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
    // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
    // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
    // ["@malinac", Images.profileImages.malina, "Great post!!", "black"],
    // ["@pcivita", Images.profileImages.pedro, "Awesome!", "black"],
  ];

  const [newComment, setNewComment] = useState("");

  const handleAddComment = () => {
    // Add logic to handle the addition of a new comment
    console.log("New Comment:", newComment);
    // You can update your state or context with the new comment
    setNewComment("");
  };

  return (
    <Modal
      onBackdropPress={() => setModalVisible(false)}
      onBackButtonPress={() => setModalVisible(false)}
      isVisible={isModalVisible}
      swipeDirection="down"
      onSwipeComplete={toggleModal}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
      avoidKeyboard
      propagateSwipe={true}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.center}>
          <View style={styles.barIcon} />
          <Text style={styles.title}>Comments</Text>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            style={styles.scrollView}
          >
            <View flex={1} onStartShouldSetResponder={() => true}>
              {comments.map((commentData, index) => (
                <Comment key={index} commentData={commentData} />
              ))}
            </View>
          </ScrollView>
          <View style={styles.inputContainer}>
            <View style={styles.imageContainer}>
              <Image
                source={Images.profileImages.pedro}
                style={styles.profileImg}
              />
            </View>
            <TextInput
              style={styles.input}
              placeholder="Add a comment..."
              value={newComment}
              onChangeText={(text) => setNewComment(text)}
            />
            {newComment && (
              <TouchableOpacity onPress={handleAddComment}>
                <View style={styles.sendContainer}>
                  <FontAwesome5 name="arrow-up" size={20} color={"white"} />
                </View>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
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
    // minHeight: 550,
    height: "85%",
    paddingBottom: 20,
  },
  center: {
    display: "flex",
    alignItems: "center",
    flex: 1,

  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  title: {
    fontSize: 20,
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
    alignSelf: "flex-end",
    height: 100,
    borderTopWidth: 0.3,
    borderTopColor: "black",

    // paddingHorizontal: 10,
    width: "100%", // Adjust width as needed
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 12,
  },
  input: {
    height: 40,
    flex: 1,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: Themes.colors.darkGray,
    paddingHorizontal: 10,
    // width: "90%"
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
  imageContainer: {
    width: "11.5%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
  sendContainer: {
    width: "100%",
    padding: 10,
    borderRadius: 100,
    backgroundColor: Themes.colors.salmon,
  },
});
