import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import CommentIcon from "./Icons/Comment";
import KudosIcon from "./Icons/Kudos";
import { Themes } from "../assets/Themes";

import { useState } from "react";

export default function Comment({ commentData }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const username = commentData[0];
  const profilePic = commentData[1];
  const comment = commentData[2];
  let kudosColor = commentData[3];

  // const [commentKudosColor, setCommentKudosColor] = useState("black"); // Initial color

  const toggleCommentKudos = (prevColor) => {
    kudosColor === "black" ? "red" : "black"
  };

  return (
    <View style={styles.container}>
        <View style={styles.ImageText}>
          <View style={styles.imageContainer}>
            <Image
              source={profilePic}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.usernameText}>{username}</Text>
            <Text style={styles.commentText}>{comment}</Text>
            <TouchableOpacity onPress={toggleCommentKudos(kudosColor)}>
              <Text style={styles.replyText}>Reply</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    height: 100, // Keep this Standard
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderWidth: 0.3,
    borderColor: "grey",
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
  usernameText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: Themes.colors.salmon,
  },
  commentText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  replyText: {
    fontFamily: "Poppins-Regular",
    fontSize: 13,
    color: "gray",
  },
  textContainer: {
    gap: 5,
    width: "80%",
    // borderWidth: 1,
  },
  actionItemsContainer: {
    // borderWidth: 1,
    flexDirection: "row",
    alignSelf: "flex-start",
    gap: 12,
  },
  commentContainer: {
    marginTop: 3,
  },
});