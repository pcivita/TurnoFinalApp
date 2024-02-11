import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { useState } from "react";
import Images from "../assets/Themes/Images";
import ActivityModal from "./ActivityModal";
import CreateChoiceModal from "./CreateChoiceModal";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Activity({ activityObject, index, section }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const diceImages = {
    1: Images.diceIcons.one,
    2: Images.diceIcons.two,
    3: Images.diceIcons.three,
    4: Images.diceIcons.four,
    5: Images.diceIcons.five,
    6: Images.diceIcons.six,
  };

  let activityName = activityObject ? activityObject[0] : null;

  return (
    <View>
      <TouchableOpacity onPress={openModal}>
      {activityObject ? (
        <View style={styles.container}>
          <View style={styles.diceContainer}>
            <Image source={diceImages[index]} style={styles.diceNumberIcon} />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text} numberOfLines={3} ellipsizeMode="tail">
              {activityName}
            </Text>
          </View>
          <ActivityModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            activity={activityObject}
            indexInSection={index - 1}
          />
        </View>
      ) : (
        <View style={[styles.container, styles.gray]}>
          <View style={styles.createActivityContainer}>
            <FontAwesome5
              name="plus"
              size={45}
              color={Themes.colors.salmon}
              style={styles.createActivity}
            />
          </View>
          <CreateChoiceModal
            isVisible={isModalVisible}
            closeModal={closeModal}
            indexInSection={index - 1}
          />
        </View>
      )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.salmonMedium,
    height: 150,
    width: 170,
    borderRadius: 10,
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    // shadowColor: "rgba(0, 0, 0, 0.5)",
    // shadowOffset: { height: 2 },
    // shadowOpacity: 0.3,
    // shadowRadius: 2,
  },
  gray: {
    borderWidth: 0.5,
    borderColor: Themes.colors.darkGray,
    backgroundColor: Themes.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  leftOfContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 10,
  },
  rightOfContainer: {
    right: 10,
  },
  currentActivity: {
    backgroundColor: Themes.colors.salmon,
  },
  pendingActivity: {
    backgroundColor: Themes.colors.salmonLight,
  },
  text: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    color: "white",
    textAlign: "center",
  },
  textContainer: {
    alignContent: "center",
    justifyContent: "center",

  },
  currentText: {
    color: "white",
  },
  pendingText: {
    color: "black",
  },
  diceContainer: {
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  diceNumberIcon: {
    flex: 1,
    width: "100%",
    height: undefined,
    aspectRatio: 1,
  },
  currentDiceContainer: {
    backgroundColor: "white",
  },
  pendingDiceContainer: {
    backgroundColor: "transparent",
  },
  currentDiceNumber: {
    color: Themes.colors.salmon,
    fontWeight: "bold",
    fontSize: 20,
  },
  createActivityContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  createActivity: {
    alignSelf: "center",
  },
  box: {
    flexDirection: "column",
    alignItems: "center",
    padding: 10,
  },
});
