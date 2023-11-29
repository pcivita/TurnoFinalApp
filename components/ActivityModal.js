import React from 'react';
import { Modal, View, Text, TextInput, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Themes } from "../assets/Themes";
import Category from "./Category";
import ViewActivity from "../app/activities/viewActivity";
import EditActivity from "../app/activities/editActivity";

export default function ActivityModal({ isVisible, closeModal, activity, section }) {
  const handlePressOutside = (e) => {
    // Check if the click is outside the modal
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const otherSection = 
    (section === "Current Activities") ? "Pending Activities" : "Current Activities";

  const name = activity[0];
  const description = activity[1];
  const category = activity[2].toLowerCase();
  
  const categoryIcon = Themes.categoryIcons[category];
  
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
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <MaterialCommunityIcons name="close" size={30} color="black" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>My Activity </Text>
            </View>
            <View style={styles.activityNameContainer}>
              <Text style={styles.subtitle}> Activity Name </Text>
              <TextInput
                style={styles.input}
                //placeholder="E. Go on a Run!"
                value={name}
                //onChangeText={setActivityName} // Update the state variable with the input
              />
            </View>
            <View style={styles.descriptionContainer}>
              <Text style={styles.subtitle}> Description </Text>
              <TextInput
                editable
                multiline
                blurOnSubmit={true}
                onSubmitEditing={() => {
                  Keyboard.dismiss();
                }}
                numberOfLines={4}
                style={styles.input}
                //placeholder="Ex. Go on a run around Lake Lagunita"
                value={description}
                //onChangeText={setDescription} // Update the state variable with the input
              />
            </View>
            <View style={styles.categoriesContainer}>
              <Category
                key={1}
                id={1}
                isSelected="true"
                categoryName={category}
                iconName={categoryIcon}
              />
            </View>
            <MaterialCommunityIcons name="trash-can-outline" size={40} color="black" />
            <MaterialCommunityIcons name="pencil-outline" size={40} color="black" />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0, 0, 0, 0.7)',
    flex: 1,
    justifyContent: 'flex-end', // Align the content at the bottom
    backgroundColor: 'rgba(0, 0, 0, 0.4)', // Slightly transparent background
  },
  modal: {
    height: "90%",
    width: "100%",
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 10,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    position: 'absolute',
    top: 'auto', // Reset the top position
    bottom: 0,    // Position at the bottom
    overflow: "hidden"
  },
  titleContainer: {
    height: "10%",
    width: "100%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
    marginTop: -15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
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
    top: 5,
    right: 5,
  },
  activityNameContainer: {
    paddingTop: "5%",
    height: "15%",
    width: "100%",
    gap: "10%",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 19,
    //backgroundColor: Themes.colors.lightGray,
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
    height: "25%",
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
    // flex: 1,
    //height: "40%", 
    // flexDirection: "row",
    // justifyContent: "space-between",

    // flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "flex-start",
    // width: "100%"
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
    width: '90%',
    backgroundColor: Themes.colors.darkGray,
    marginVertical: 10,
  },
  middleSection: {
    backgroundColor: Themes.colors.salmon,
    width: "95%",
    height: "30%",
    //borderRadius: 10,
    //paddingHorizontal: 15,
    flexDirection: "row",
  },
  categoryContainer: {
    backgroundColor: Themes.colors.salmon,
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "20%"
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
});