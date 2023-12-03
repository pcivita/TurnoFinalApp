import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { Link } from "expo-router";

import Dice from "../../components/Dice";

export default function Page() {
  return (
    <View style={styles.container}>
      <Dice style={styles.Dice} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: Themes.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  Dice: {
    width: "100%",
    borderWidth: 2,
    borderColor: "red",
  },
});
