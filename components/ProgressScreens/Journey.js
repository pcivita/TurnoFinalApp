import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";
import SwipeButton from "../SwipeButton";

export default function Journey() {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ActivityCircle right={70} status="complete" />
      <ActivityCircle right={55} status="complete" />
      <ActivityCircle right={0} status="complete" />
      <ActivityCircle right={-55} status="complete" />
      <ActivityCircle right={-70} status="complete" />
      <ActivityCircle right={-55} status="complete" />
      <ActivityCircle right={0} status="complete" />
      <ActivityCircle right={55} status="in progress" />

      <ActivityCircle right={70} status="incomplete" />
      <ActivityCircle right={55} status="incomplete" />
      <ActivityCircle right={0} status="incomplete" />
      <ActivityCircle right={-55} status="incomplete" />
      <ActivityCircle right={-70} status="incomplete" />
      <ActivityCircle right={-55} status="incomplete" />
      <ActivityCircle right={0} status="incomplete" />
      <ActivityCircle right={55} status="incomplete" />

      <ActivityCircle right={70} status="incomplete" />
      <ActivityCircle right={55} status="incomplete" />
      <ActivityCircle right={0} status="incomplete" />
      <ActivityCircle right={-55} status="incomplete" />
      <ActivityCircle right={-70} status="incomplete" />
      <ActivityCircle right={-55} status="incomplete" />
      <ActivityCircle right={0} status="incomplete" />
      <ActivityCircle right={55} status="incomplete" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  title: {
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
  swipeButton: {
    justifyContent: 'center',
    alignItems:'center',
    position: 'absolute',
    bottom: 20,
    right: 20,
    height: 100,
    width: "100%"
  },
});
