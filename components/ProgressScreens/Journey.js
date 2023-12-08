import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";
import SwipeButton from "../SwipeButton";
import { useState } from "react";
import ActivityCircleModal from "../ActivityCircleModal";

export default function Journey() {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleActivityCirclePress = () => {
    setModalVisible(true);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentOffset={{ x: 0, y: 300 }}
    >
      <ActivityCircle right={70} status="complete" top={70} index={0} />
      <ActivityCircle right={55} status="complete" top={70} index={1} />
      <ActivityCircle right={25} status="complete" top={70} index={3} />
      <ActivityCircle right={-15} status="complete" top={60} index={4} />
      <ActivityCircle right={-50} status="complete" top={70} index={1} />
      <ActivityCircle right={-50} status="complete" top={70} index={5} />
      <ActivityCircle right={-25} status="complete" top={70} index={0} />
      <ActivityCircle right={25} status="in progress" top={30} onPress={handleActivityCirclePress}/>

      <ActivityCircle right={60} status="incomplete" top={95} />
      <ActivityCircle right={70} status="incomplete" top={50} />
      <ActivityCircle right={70} status="incomplete" top={100} />
      <ActivityCircle right={60} status="incomplete" top={50} />
      <ActivityCircle right={25} status="incomplete" top={90} />
      <ActivityCircle right={0} status="incomplete" top={50} />
      <ActivityCircle right={0} status="incomplete" top={100} />
      <ActivityCircle right={35} status="incomplete" top={30} />

      <ActivityCircle right={70} status="incomplete" top={100} />
      <ActivityCircleModal isModalVisible={isModalVisible} closeModal={() => setModalVisible(false)} />
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
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 20,
    right: 20,
    height: 100,
    width: "100%",
  },
});
