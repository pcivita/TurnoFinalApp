import { Image, Text, View, StyleSheet } from "react-native";
import Images from "../assets/Themes/Images";
export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Images.profileImages.pedro} style={styles.profileImg} />
      </View>
      <Text> This is a Post </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 24,
    borderWidth: 1,
    borderColor: "black",
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
});
