import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../assets/Themes";
import { Link } from "expo-router";
import Post from "../components/Post";

export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.title}>Profile</Text>
        <Post style={styles.post} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
    backgroundColor: Themes.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginHorizontal: "auto",
    borderColor: "black",
    borderWidth: 2,
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  post: {
    borderColor: "black",
    borderWidth: 2,
  },
});
