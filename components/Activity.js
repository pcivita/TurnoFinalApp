import { StyleSheet, View, Text } from "react-native";
import { Themes } from "../assets/Themes";

export default function Activity({ activityName, index, status }) {
  const sectionStyle =
    status === "Current Activities" ? styles.currentActivity : styles.pendingActivity;
  
  return (
    <View style={[styles.container, sectionStyle]}>
      {status === "Current Activities" && <Text> {index} </Text>}
      <Text> {activityName} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    borderRadius: "5",
    marginVertical: 10,
    height: 50,
  },
  currentActivity: {
    backgroundColor: Themes.colors.salmon,
  },
  pendingActivity: {
    backgroundColor: Themes.colors.salmonLight,
  }
});
