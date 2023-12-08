import { View, Text, StyleSheet, ScrollView, Button } from "react-native";
import ActivityCircle from "../ActivityCircle";
import { Themes } from "../../assets/Themes";
import SwipeButton from "../SwipeButton";
import { useState, useContext } from "react";
import ActivityCircleModal from "../ActivityCircleModal";
import { InProgressContext } from "../../contexts/InProgressContext";

export default function Journey({ flipping }) {
  const { inProgress } = useContext(InProgressContext);
  const { curActivity } = useContext(InProgressContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [modalCategory, setModalCategory] = useState(0);
  const [modalStatus, setModalStatus] = useState("");
  const [modalActivity, setModalActivity] = useState("");

  const handleActivityCirclePress = (status, category, curActivity) => {
    if (status !== "incomplete") {
      setModalCategory(category);
      setModalStatus(status);
      setModalActivity(curActivity);
      setModalVisible(true);
    }
  };

  const rightPosition = [
    70, 55, 25, -15, -50, -50, -25, 25, 60, 70, 70, 60, 25, 0, 0, 35, 70, 70,
    55, 25, -15, -50, -50, -25, 25, 60, 70, 70, 60, 25, 0, 0, 35, 70, 70, 55,
    25, -15, -50, -50, -25, 25, 60, 70, 70, 60, 25, 0, 0, 35, 70,
  ];
  const status = [
    "complete",
    "complete",
    "complete",
    "complete",
    "complete",
    "complete",
    "complete",
    "in progress",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
    "incomplete",
  ];

  const category = [0, 1, 4, 3, 5, 2, 3, 2, 5, 1, 2, 4];
  const topPosition = 70;

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentOffset={{ x: 0, y: 300 }}
    >
      {rightPosition.map((circle, index) => (
        <ActivityCircle
          category={category[index]}
          flipping={flipping}
          key={index} // Ensure a unique key for each component
          right={circle} // Assuming 'circle' represents the right position
          status={status[index]}
          top={topPosition}
          index={index} // Set the index if needed, otherwise remove it
          onPress={() =>
            handleActivityCirclePress(
              status[index],
              category[index],
              curActivity
            )
          }
        />
      ))}

      {inProgress && (
        <ActivityCircle
          right={rightPosition[7]}
          status="in progress"
          top={topPosition}
          onPress={handleActivityCirclePress}
        />
      )}

      <ActivityCircleModal
        modalCategory={modalCategory}
        modalStatus={modalStatus}
        isModalVisible={isModalVisible}
        closeModal={() => setModalVisible(false)}
      />
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
