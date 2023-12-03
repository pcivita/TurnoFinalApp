import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import Kudos from "./Kudos";

import { useState } from "react";

export default function Post() {
  const [color, setColor] = useState("black"); // Initial color

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === "black" ? "red" : "black"));
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  // PROVISORY
  let actityName = "Go on a run for 100 days in Lake Lag without stopping";

  return (
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
            You Completed: <Text>{actityName} </Text>
          </Text>
        </View>
      </View>

      <TouchableOpacity onPress={toggleColor}>
        <Kudos color={color} />
      </TouchableOpacity>
    </View>
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
    width: "80%",
    // borderWidth: 1,
  },
});
