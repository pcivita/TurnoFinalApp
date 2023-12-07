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

export default function PostPreview({ postId }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // PROVISORY
  let activityName = "Go on a run for 100 days in Lake Lag without stopping";

  return (
    // <CommentsProvider postId={postId}>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={Images.profileImages.pedro}
          style={styles.profileImg}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.postText}>
          You Completed: <Text>{activityName} </Text>
        </Text>
      </View>
    </View>
    // </CommentsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 110, // Keep this Standard
    width: "100%",
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
    width: "15%",
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
  postText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  textContainer: {
    gap: 16,
    width: "80%",
  },
});