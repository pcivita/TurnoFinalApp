import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from "react";
import Images from "../assets/Themes/Images";
import ActivityModal from "./ActivityModal";

export default function Activity({ activityObject, index, section }) {
  const sectionColor =
    section === "Current Activities"
      ? styles.currentActivity
      : styles.pendingActivity;
  const textColor =
    section === "Current Activities" ? styles.currentText : styles.pendingText;
  const iconColor = 
    section === "Current Activities" ? "white": "black";
    

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

  return (
    <View>
      <View style={[styles.container, sectionColor]}>
        <View style={styles.leftOfContainer}>
          {section === "Current Activities" && (
            <View style={styles.diceContainer}>
              <Image
                source={diceImages[index]}
                style={styles.diceNumberIcon}
              />
            </View>
          )}
          <Text style={[styles.text, textColor]}> {activityObject[0]} </Text>
        </View>
        <TouchableOpacity
          style={styles.rightOfContainer}
          onPress={openModal}
        >
          <MaterialCommunityIcons name="dots-vertical" size={30} color={iconColor} />
          <ActivityModal 
            isVisible={isModalVisible} 
            closeModal={closeModal} 
            activity={activityObject}
            section={section}
            indexInSection={index - 1}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginVertical: 5,
    height: 60,
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
    fontSize: 20,
  },
  currentText: {
    color: "white",
  },
  pendingText: {
    color: "black",
  },
  diceContainer: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "white",
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
});
