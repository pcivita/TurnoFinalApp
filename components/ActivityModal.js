import React, { useState, useEffect } from "react";
import {
  Modal,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Touchable,
} from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Themes } from "../assets/Themes";
import Category from "./Category";
import CategoryDisabled from "./CategoryDisabled";

export default function ActivityModal({
  isVisible,
  closeModal,
  activity,
  section,

}) {
  const categories = [
    ["Exercise", "running"],
    ["Relax", "cat"],
    ["Social", "user-friends"],
    ["Work", "briefcase"],
    ["Academic", "graduation-cap"],
    ["Chore", "broom"],
  ];

  const handlePressOutside = (e) => {
    // Check if the click is outside the modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const otherSection =
    section === "Current Activities"
      ? "Pending"
      : "Dice";

  const title = 
    section === "Current Activities" ? "Current Activity" : "Pending Activity";

  const name = activity[0];
  const description = activity[1];
  const category = activity[2].toLowerCase();
  const categoryIcon = Themes.categoryIcons[category];

  const [editMode, setEditMode] = useState(false);

  const [newName, setNewName] = useState(name);
  const [newDescription, setNewDescription] = useState(description);


  const initialSelectedId = categories.findIndex(
    (currentCategory) => currentCategory[0] === activity[2]
  );
  const [selectedId, setSelectedId] = useState(initialSelectedId + 1);
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  useEffect(() => {
    if (!isVisible) {
      setEditMode(false);
    }
  }, [isVisible]);

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        closeModal();
      }}
    >
      <TouchableWithoutFeedback onPress={(e) => handlePressOutside(e)}>
        <View style={styles.container}>
          <View style={styles.modal}>
            <View style={styles.titleContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <MaterialCommunityIcons name="close" size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
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
              <View style={styles.oneCategoryContainer}>
                <CategoryDisabled
                  key={1}
                  isSelected="true"
                  categoryName={category}
                  iconName={categoryIcon}
                />
              </View>
            }
            {editMode &&
              <View style={styles.categoriesContainer}>
              {[1, 2, 3, 4, 5, 6].map((id) => (
                <Category
                  key={id}
                  id={id}
                  isSelected={id === selectedId}
                  onSelect={handleSelect}
                  categoryName={categories[id - 1][0]} 
                  iconName={categories[id - 1][1]}
                />
              ))}
              </View>
            }


            {/* <MaterialCommunityIcons
              name="trash-can-outline"
              size={40}
              color="black"
            /> */}
            <View style={styles.buttonsContainer}>
              <View style={styles.leftSide}>
                {!editMode && 
                  <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{"Move to " + otherSection}</Text>
                  </TouchableOpacity>
                }
                {editMode && 
                  <TouchableOpacity style={styles.buttonSecondary} onPress={() => setEditMode(!editMode)}>
                    <Text style={styles.buttonTextSecondary}>Cancel</Text>
                  </TouchableOpacity>
                }
              </View>

              <View style={styles.leftSide}>
                <TouchableOpacity onPress={() => setEditMode(!editMode)}>
                  {!editMode &&
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>
                        Edit Activity
                      </Text>
                      <MaterialCommunityIcons
                        name="pencil-outline"
                        size={20}
                        color="white"
                      />
                    </View>
                  }
                  {editMode &&
                    <View style={styles.button}>
                      <Text style={styles.buttonText}>
                        Save Activity
                      </Text>
                      <MaterialCommunityIcons name="content-save" size={20} color="white" />
                    </View>
                  }
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: "flex-end", // Align the content at the bottom
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Slightly transparent background
  },
  modal: {
    height: "90%",
    width: "100%",
    backgroundColor: "white",
    borderRadius: 20,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    position: "absolute",
    top: "auto", // Reset the top position
    bottom: 0, // Position at the bottom
    overflow: "hidden",
  },
  titleContainer: {
    //height: "10%",
    height: 70,
    width: "100%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
    marginTop: -15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
    alignSelf: "center",
  },
  subtitle: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
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
    fontSize: 19,
    backgroundColor: Themes.colors.lightGray,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Themes.colors.lightGray,
    padding: 10,
  },
  editableInput: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 19,
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
  oneCategoryContainer: {
    margin: 15,
    flex: 1,
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

  leftSide: {
    flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "center",
  },
  rightSide: {
    flexDirection: "column"
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
  // cancelContainer: {
  //   height: "90%",
  //   //margin: 12,
  //   //justifyContent: "flex-end", // Align children vertically to the end
  //   //alignSelf: "flex-start", // Align children horizontally to the end
  // },
  // addToDiceContainer: {
  //   height: "8%",
  //   //margin: 12,
  //   //justifyContent: "flex-end", // Align children vertically to the end
  //   //alignSelf: "flex-end", // Align children horizontally to the end
  // },
  // buttonEnabled: {
  //   backgroundColor: Themes.colors.salmon,
  //   padding: 10,
  //   width: "100%",
  //   flex: 1,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   borderRadius: 20,
  // },
  // buttonDisabled: {
  //   backgroundColor: Themes.colors.salmonTransparent,
  //   padding: 10,
  //   width: "100%",
  //   flex: 1,
  //   alignContent: "center",
  //   justifyContent: "center",
  //   borderRadius: 20,
  //   // borderWidth: 2,
  //   // borderColor: "black",
  // },
  // addToDice: {
  //   alignSelf: "center",
  //   fontSize: 20,
  //   fontWeight: "bold",
  //   color: "white",
  // },
});
