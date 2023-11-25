import { StyleSheet, View, Text } from "react-native";
import { Themes } from "../assets/Themes";

export default function Activity({ activityName }) {
  return (
    <View style={styles.container}>
      <Text> {activityName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
    borderRadius: "5",
    marginVertical: 10,
    height: 50,
  },
});
