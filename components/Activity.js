import { StyleSheet, View, Text, TouchableOpacity, TouchableWithoutFeedback, Image } from "react-native";
import { Themes } from "../assets/Themes";
import { useState } from "react";
import Images from "../assets/Themes/Images";
import EditChoiceModal from "./EditChoiceModal";
import AddChoiceModal from "./AddChoiceModal";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Activity({ activityObject, index, addToChoices, notMyDice }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setName("");
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

  let activityName = activityObject ? activityObject : null;

  // TODO: Connect this to backend
  const handleSave = () => {
    // Save name
    setName(name);
    // console.log("New choice added: " + name);

    // Add name to list of choices 
    addToChoices(name)
    closeModal();
  };

  return (
    <View>
      <TouchableWithoutFeedback onPress={notMyDice ? null : openModal}>
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
            <EditChoiceModal
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
            <AddChoiceModal
              isVisible={isModalVisible}
              closeModal={closeModal}
              name={name}
              setName={setName}
              handleSave={handleSave}
            />
          </View>
        )}
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.salmonVeryLight,
    height: 150,
    width: 170,
    borderRadius: 10,
    justifyContent: "center",
    gap: 10,
    alignItems: "center",

    borderColor: Themes.colors.salmon,
    borderWidth: 1,
  },
  gray: {
    borderWidth: 0.5,
    borderColor: Themes.colors.darkGray,
    backgroundColor: Themes.colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
  textContainer: {
    alignContent: "center",
    justifyContent: "center",

  },
  currentText: {
    color: "white",
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
});
