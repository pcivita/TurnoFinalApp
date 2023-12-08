import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import CommentIcon from "./Icons/Comment";
import KudosIcon from "./Icons/Kudos";
import { Themes } from "../assets/Themes";
import { Link } from "expo-router";

import { useState } from "react";

export default function Comment({ commentData }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const imageDict = {
    Pedro: require("../assets/Themes/Images/profileImages/IMG_9521.jpg"),
    Malina: require("../assets/Themes/Images/profileImages/Malina.jpg"),
    Naz: require("../assets/Themes/Images/profileImages/Naz.heic"),
    Cecilia: require("../assets/Themes/Images/profileImages/Cecilia.jpg"),
    Matt: require("../assets/Themes/Images/profileImages/Matt.jpg"),
    Digo: require("../assets/Themes/Images/profileImages/Digo.jpeg"),
    Luca: require("../assets/Themes/Images/profileImages/Luca.jpeg"),
  };

  const username = commentData.user_handle;
  const profilePic = commentData.user_image;
  const comment = commentData.comment_text;

  // const [commentKudosColor, setCommentKudosColor] = useState("black"); // Initial color

  return (
    <View style={styles.container}>
      <View style={styles.ImageText}>
        <View style={styles.imageContainer}>
          <Image source={imageDict[profilePic]} style={styles.profileImg} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.usernameText}>{username}</Text>
          <Text style={styles.commentText}>{comment}</Text>
          {/* <TouchableOpacity onPress={toggleCommentKudos(kudosColor)}>
              <Text style={styles.replyText}>Reply</Text>
            </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 90, // Keep this Standard
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
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
    fontSize: 15,
  },
  commentText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
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
