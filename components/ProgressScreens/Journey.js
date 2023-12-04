import { View, Text, StyleSheet, ScrollView } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";

export default function Journey() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ActivityCircle style={styles.post} right={25} />
      <ActivityCircle style={styles.post} right={15} />
      <ActivityCircle style={styles.post} right={0} />
      <ActivityCircle style={styles.post} right={-15} />
      <ActivityCircle style={styles.post} right={-30} />
      <ActivityCircle style={styles.post} right={-20} />
      <ActivityCircle style={styles.post} right={-5} />
      <ActivityCircle style={styles.post} right={0} />
      <ActivityCircle style={styles.post} right={2} />
      <ActivityCircle style={styles.post} right={0} />
      <ActivityCircle style={styles.post} right={1} />
      <ActivityCircle style={styles.post} right={2} />
      <ActivityCircle style={styles.post} right={5} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: Themes.colors.background,
    // Adding position relative here, although it's the default and not strictly necessary
    //position: "relative",
    flex: 1,
    // borderWidth: 2,
  },
  title: {
    // Assuming you might want your title to have some default styling
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    padding: 20,
  },

  circleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    flex: 1,
  },
});
