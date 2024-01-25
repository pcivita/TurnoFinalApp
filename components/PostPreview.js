import {
  Image,
  Text,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import KudosIcon from "./Icons/Kudos";
import CommentIcon from "./Icons/Comment";
import CommentModal from "./CommentModal";

import { useState } from "react";
import { Themes } from "../assets/Themes";

export default function PostPreview({ postId, activityName }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.profileImages.pedro} style={styles.profileImg} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.postText1}>
          You completed <Text>{activityName} </Text>
        </Text>
        <Text style={styles.postText2}>Night Time Activities</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110,
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    gap: 16,
    flexDirection: "row",
  },
  ImageText: {
    gap: 16,
    flexDirection: "row",
  },
  imageContainer: {
    width: "22%",
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
  postText1: {
    fontFamily: "Poppins-Regular",
    fontSize: 16,
  },
  postText2: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    fontStyle: "italic", // TODO: make italic
  },
  textContainer: {
    gap: 5,
    width: "80%",
  },
});
