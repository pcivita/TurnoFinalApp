import { View, Text, StyleSheet, Image } from "react-native";

export default function FriendCard({ friendName }) {
  const imagesDict = {
    Malina: require("../assets/Themes/Images/profileImages/Malina.jpg"),
    Cecilia: require("../assets/Themes/Images/profileImages/Cecilia.jpg"),
    Nazanin: require("../assets/Themes/Images/profileImages/Naz.heic"),
    Matt: require("../assets/Themes/Images/profileImages/Matt.jpg"),
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImg} source={imagesDict[friendName]} />
      </View>

      <Text style={styles.text}> {friendName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    width: "100%",
    borderWidth: 0.3,
    height: "30%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    gap: 12,
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
  text: {
    fontSize: 14,
    fontFamily: "Poppins-Bold",
  },
});
