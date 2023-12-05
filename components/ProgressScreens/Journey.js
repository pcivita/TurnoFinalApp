import { View, Text, StyleSheet, ScrollView } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";

export default function Journey() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ActivityCircle style={styles.post} right={70} status="completed" />
      <ActivityCircle style={styles.post} right={55} status="completed"/>
      <ActivityCircle style={styles.post} right={0} status="completed"/>
      <ActivityCircle style={styles.post} right={-55} status="completed"/>
      <ActivityCircle style={styles.post} right={-70} status="completed"/>
      <ActivityCircle style={styles.post} right={-55} status="completed"/>
      <ActivityCircle style={styles.post} right={0} status="completed"/>
      <ActivityCircle style={styles.post} right={55} status="in progress"/>

      <ActivityCircle style={styles.post} right={70} status="incomplete"/>
      <ActivityCircle style={styles.post} right={55} status="incomplete"/>
      <ActivityCircle style={styles.post} right={0} status="incomplete"/>
      <ActivityCircle style={styles.post} right={-55} status="incomplete"/>
      <ActivityCircle style={styles.post} right={-70} status="incomplete"/>
      <ActivityCircle style={styles.post} right={-55} status="incomplete"/>
      <ActivityCircle style={styles.post} right={0} status="incomplete"/>
      <ActivityCircle style={styles.post} right={55} status="incomplete"/>

      <ActivityCircle style={styles.post} right={70} />
      <ActivityCircle style={styles.post} right={55} />
      <ActivityCircle style={styles.post} right={0} />
      <ActivityCircle style={styles.post} right={-55} />
      <ActivityCircle style={styles.post} right={-70} />
      <ActivityCircle style={styles.post} right={-55} />
      <ActivityCircle style={styles.post} right={0} />
      <ActivityCircle style={styles.post} right={55} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
