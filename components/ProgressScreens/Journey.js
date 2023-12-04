import { View, Text, StyleSheet, ScrollView } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";

export default function Journey() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}> JOURNEY </Text>
      <ActivityCircle style={styles.circle1} />
      <ActivityCircle style={styles.circle2} />
      <ActivityCircle style={styles.circle3} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    backgroundColor: Themes.colors.background,
    // Adding position relative here, although it's the default and not strictly necessary
    position: "relative",
    borderWidth: 2,
  },
  title: {
    // Assuming you might want your title to have some default styling
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },

  circle2: {
    position: "absolute",
    top: 160,
    right: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "blue",
  },
  circle3: {
    position: "absolute",
    top: 220,
    left: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "green",
  },
});
