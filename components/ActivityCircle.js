import { View, StyleSheet } from "react-native";
import { Themes } from "../assets/Themes";

export default function ActivityCircle() {
  return <View style={styles.circle}></View>;
}

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
    backgroundColor: Themes.colors.salmon,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.55,
    shadowRadius: 3.84,
  },
});
