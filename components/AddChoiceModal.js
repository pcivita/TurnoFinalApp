import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivitiesContext } from "../contexts/ActivitiesContext";
import { Themes } from "../assets/Themes";

export default function AddChoiceModal({
  isVisible,
  closeModal,
  name,
  setName
}) {
  const { addActivity } = useContext(ActivitiesContext);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    const formChanged = name !== "";
    setIsFormChanged(formChanged);
  }, [name]);

  const handleSave = () => {
    setName(name);
    // TODO: Connect to backend
    console.log("New choice added: " + name);
    closeModal();
    // addActivity(name);
  };

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      onBackButtonPress={() => closeModal()}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={() => closeModal()}
      animationInTiming={400}
      animationOutTiming={400}
      backdropTransitionInTiming={600}
      backdropTransitionOutTiming={600}
      avoidKeyboard
      propagateSwipe={true}
      style={styles.modal}
    >
      <View style={styles.modalContent}>
        <View style={styles.barIcon} />
        <View style={styles.titleContainer}>
          <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
            <MaterialCommunityIcons name="close" size={30} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>Add a Choice</Text>
        </View>
        <View style={styles.activityNameContainer}>
          <Text style={styles.subtitle}>
            Choice Name <Text style={styles.asterick}>*</Text>
          </Text>
          <TextInput
            style={styles.editableInput}
            value={name}
            editable
            onChangeText={setName}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave}>
            <View
              style={[
                styles.button,
                isFormChanged ? null : styles.buttonDisabled,
              ]}
            >
              <Text style={styles.buttonText}>Add to Dice</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "white",
    paddingTop: 10,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: 300,
    paddingBottom: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
  },
  titleContainer: {
    top: 10,
    // height: 60,
    width: "100%",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    alignSelf: "center",
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    fontFamily: "Poppins-Regular",
    paddingHorizontal: 0,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  activityNameContainer: {
    paddingTop: "5%",
    height: 100,
    width: "92.5%",
    gap: "10%",
  },
  input: {
    fontSize: 16,
    padding: 8,
    fontFamily: "Poppins-Regular",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Themes.colors.lightGray,
    backgroundColor: Themes.colors.lightGray,
  },
  editableInput: {
    fontSize: 16,
    padding: 8,
    fontFamily: "Poppins-Regular",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Themes.colors.darkGray,
  },
  activityName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  topSection: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  name: {
    fontSize: 25,
    paddingLeft: 5,
  },
  horizontalLine: {
    height: 1,
    width: "90%",
    backgroundColor: Themes.colors.darkGray,
    marginVertical: 10,
  },
  categoryContainer: {
    backgroundColor: Themes.colors.salmon,
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "20%",
  },
  editActivityContainer: {
    flex: 0.09,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 5,
  },
  editActivityButton: {
    backgroundColor: Themes.colors.salmon,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    alignItems: "center",
    overflow: "hidden", // Ensures no child can go outside the button boundaries
    // position: "absolute",
    // bottom: 5,
  },
  editActivityText: {
    paddingHorizontal: 0,
    color: "white",
    fontSize: 17,
  },
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: Themes.colors.salmon,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    padding: 10,
    borderRadius: 40,
  },
  buttonDisabled: {
    backgroundColor: Themes.colors.salmonTransparent,
    borderColor: "transparent",
  },
  buttonText: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonTextSecondary: {
    color: Themes.colors.salmon,
    fontSize: 17,
    fontWeight: "bold",
  },
  asterick: {
    color: Themes.colors.salmon,
  },
});
