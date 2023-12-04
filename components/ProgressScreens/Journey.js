import { View, Text, StyleSheet } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";

export default function Journey() {
  return (
    <View style={styles.container}>
      <Text> JOURNEY </Text>
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
      <ActivityCircle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: Themes.colors.background,
  },
});
