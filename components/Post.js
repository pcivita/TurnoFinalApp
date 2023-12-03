import { Image, Text, View, StyleSheet } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";

export default function Post() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.profileImages.pedro} style={styles.profileImg} />
      </View>
      <Text style={styles.postText}> This is a Post </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150, // Keep this Standard
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    borderWidth: 0.3,
    borderColor: "grey",
  },
  imageContainer: {
    width: "10%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "black",
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
  },
});
