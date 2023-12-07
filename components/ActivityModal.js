import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Modal from 'react-native-modal';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ActivitiesContext } from "../contexts/ActivitiesContext";
import { Themes } from "../assets/Themes";
import Category from "./Category";
import CategoryDisabled from "./CategoryDisabled";

export default function ActivityModal({
  isVisible,
  closeModal,
  activity,
  section,
  indexInSection,
}) {
  const { editActivity, deleteActivity } = useContext(ActivitiesContext);

  const [name, setName] = useState(activity[0]);
  const [description, setDescription] = useState(activity[1]);
  const [selectedId, setSelectedId] = useState(Themes.categories.findIndex(
    (currentCategory) => currentCategory[0] === activity[2]) + 1
  );

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);
  const [newSelectedId, setNewSelectedId] = useState(selectedId);

  const handleSelect = (id) => {
    setNewSelectedId(id);
  };

  const [editMode, setEditMode] = useState(false);
  const [isFormChanged, setIsFormChanged] = useState(false);

  useEffect(() => {
    if (editMode) {
      // Check if any of the values are different from the original
      const formChanged =
        newName !== name ||
        newDescription !== description ||
        newSelectedId !== selectedId;
      setIsFormChanged(formChanged);
    } else {
      // Reset formChanged state when exiting edit mode
      setIsFormChanged(false);
    }
  }, [editMode, newName, newDescription, newSelectedId]);
 
  useEffect(() => {
    if (!isVisible) {
      setEditMode(false);
    }
  }, [isVisible]);

  const handleSave = () => {
    setName(newName);
    setDescription(newDescription);
    setSelectedId(newSelectedId);

    let newCategory = Themes.categories[newSelectedId - 1][0];

    editActivity(indexInSection, newName, newDescription, newCategory);
    setEditMode(false);
  }

  const handleCancel = () => {
    // Revert everything back to how it was before
    setNewName(name);
    setNewDescription(description);
    setNewSelectedId(selectedId);

    setEditMode(false);
  }

  const handleDelete = () => {
    deleteActivity(indexInSection);
    setEditMode(false);
    closeModal();
  }

  return (
    <Modal
      onBackdropPress={() => closeModal()}
      onBackButtonPress={() => closeModal()}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={() => closeModal()}
      animationIn="bounceInUp"
      animationOut="bounceOutDown"
      animationInTiming={900}
      animationOutTiming={500}
      backdropTransitionInTiming={1000}
      backdropTransitionOutTiming={500}
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
            <Text style={styles.title}>Activity {indexInSection + 1}</Text>
          </View>
          <View style={styles.activityNameContainer}>
            <Text style={styles.subtitle}> Activity Name </Text>
            {!editMode &&
              <TextInput
                style={styles.input}
                value={newName}
                editable={false}
              />
            }
            {editMode &&
              <TextInput
                style={styles.editableInput}
                value={newName}
                editable
                onChangeText={setNewName} // Update the state variable with the input
              />
            }
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.subtitle}> Description </Text>
            {!editMode &&
              <TextInput
                multiline
                editable={false}
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                numberOfLines={4}
                style={styles.input}
                value={newDescription}
              />
            }
            {editMode &&
              <TextInput
                multiline
                editable
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                numberOfLines={4}
                style={styles.editableInput}
                value={newDescription}
                onChangeText={setNewDescription}
              />
            }
          </View>
          {!editMode &&
            <View style={styles.categoriesContainer}>
              <CategoryDisabled
                isSelected="true"
                id={newSelectedId}
                categories={Themes.categories}
              />
            </View>
          }
          {editMode &&
            <View style={styles.categoriesContainer}>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Category
                  key={id}
                  id={id}
                  isSelected={id === newSelectedId}
                  onSelect={handleSelect}
                  categoryName={Themes.categories[id - 1][0]} 
                  iconName={Themes.categories[id - 1][1]}
                />
              ))}
            </View>
          }
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              {!editMode && 
                <TouchableOpacity 
                  style={styles.button} 
                  onPress={handleDelete}
                >
                  <Text style={styles.buttonText}>Delete Activity</Text>
                  <MaterialCommunityIcons name="trash-can-outline" size={20} color="white"/>
                </TouchableOpacity>
              }
              {editMode && 
                <TouchableOpacity 
                  style={styles.buttonSecondary} 
                  onPress={handleCancel}
                >
                  <Text style={styles.buttonTextSecondary}>Cancel</Text>
                </TouchableOpacity>
              }
            </View>

            <View style={styles.buttonContainer}>
              {!editMode &&
                <TouchableOpacity
                  //disabled={editMode && !isFormChanged}
                  onPress={() => {
                    setEditMode(true);
                  }}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}>Edit Activity</Text>
                    <MaterialCommunityIcons name="pencil" size={20} color="white"/>
                  </View>
                </TouchableOpacity>
              }
              {editMode &&
                <TouchableOpacity
                  disabled={editMode && !isFormChanged}
                  onPress={handleSave}
                >
                  <View style={[styles.button, isFormChanged ? null : styles.buttonDisabled ]}>
                    <Text style={styles.buttonText}>Save Activity</Text>
                    <MaterialCommunityIcons name="content-save" size={20} color="white" />
                  </View>
                </TouchableOpacity>
              }
            </View>
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
    paddingTop: 12,
    // paddingHorizontal: 12,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    // minHeight: 600,
    height: 730,
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
    height: 70,
    width: "100%",
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    alignSelf: "center",
    fontFamily: "Poppins-Bold"
  },
  subtitle: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold"
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 5,
  },
  activityNameContainer: {
    paddingTop: "5%",
    //height: "15%",
    height: 100,
    width: "100%",
    gap: "10%",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    backgroundColor: Themes.colors.lightGray,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Themes.colors.lightGray,
    padding: 10,
  },
  editableInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Themes.colors.mediumGray,
    padding: 10,
  },
  activityName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  descriptionContainer: {
    paddingTop: "5%",
    //height: "25%",
    height: 200,
    width: "100%",
    gap: "10%",
  },
  description: {
    color: "white",
    fontSize: 15,
    paddingTop: 10,
  },
  categoriesContainer: {
    margin: 15,
    gap: 10,
    flex: 1,
    height: "40%", 
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",
    //paddingTop: 90,
    paddingBottom: 40,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  button: {
    backgroundColor: Themes.colors.salmon,
    padding: 10,
    borderRadius: 30,
    width: 170,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: Themes.colors.salmon,
  },
  buttonSecondary: {
    padding: 10,
    borderRadius: 30,
    width: 170,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderWidth: 3,
    borderColor: Themes.colors.salmon,
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
  }
});
