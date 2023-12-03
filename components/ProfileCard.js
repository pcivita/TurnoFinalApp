import { Image, Text, View, StyleSheet } from "react-native";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";

export default function ProfileCard() {
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
      <Text style={styles.profileName}> Pedro Civita </Text>
      <Text style={styles.handle}> pcivita </Text>
      <View style={styles.friendsBox}>
        <Text style={styles.handle}> 16 friends </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300, // Keep this Standard
    gap: 4,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    borderWidth: 0.3,
    borderColor: "grey",
  },
  imageContainer: {
    width: "30%",
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
  },
  profileName: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
  },
  handle: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
  friendsBox: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
  },
});
