import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import KudosIcon from "./Icons/Kudos";
import CommentIcon from "./Icons/Comment";
import CommentModal from "./CommentModal";
import { CommentsProvider } from '../contexts/CommentsContext';

import { useState } from "react";

export default function Post({ postId }) {
  const [kudosColor, setKudosColor] = useState("black"); // Initial color

  const toggleKudos = () => {
    setKudosColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const closeModal = () => {
    setModalVisible(false);
  };

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
    <CommentsProvider postId={postId}>
      <View style={styles.container}>
        <View style={styles.ImageText}>
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
            <View style={styles.actionItemsContainer}>
              <TouchableOpacity onPress={toggleKudos}>
                <KudosIcon color={kudosColor} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.commentContainer} onPress={() => setModalVisible(true)}>
                <CommentIcon color="black" />
                <CommentModal isVisible={isModalVisible} closeModal={closeModal} postId={postId}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </CommentsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150, // Keep this Standard
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
  postText: {
    fontFamily: "Poppins-Regular",
    fontSize: 15,
  },
  textContainer: {
    gap: 16,
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
  }
});
