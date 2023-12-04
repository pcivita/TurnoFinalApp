import { View, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

export default function ActivityCircle() {
  return <View style={styles.circle1}></View>;
}

const styles = StyleSheet.create({
  circle1: {
    position: "absolute",
    right: "44%",
    bottom: "-670%",
    width: 50, // Define a width
    height: 50, // and a height
    borderRadius: 25, // and make it round
    backgroundColor: "red", // Temporarily set a background color to make it visible
  },
});
