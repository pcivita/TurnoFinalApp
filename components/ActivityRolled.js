import { View, StyleSheet, Text, Image } from "react-native";
import { Themes } from "../assets/Themes";
import Images from "../assets/Themes/Images";

export default function ActvityRollled() {
  return (
    <View style={styles.activityName}>
      <View style={styles.imageContainer}>
        <Image source={Images.diceIcons.four} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}> Go for a Run </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  activityName: {
    backgroundColor: Themes.colors.blue,
    flex: 1,
    width: "95%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
    zIndex: 10,
    borderRadius: 20,
    gap: 12,

    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
    },
  },
  imageContainer: {
    width: "20%",
    height: undefined,
    alignSelf: "center",
    aspectRatio: 1,
    borderRadius: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontFamily: "Poppins-Bold",
    color: Themes.colors.background,
    fontSize: 32,
  },
});
