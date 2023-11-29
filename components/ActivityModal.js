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
  const category = activity[2];
  
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
              <Text style={styles.title}>Category icon for {category} </Text>
            </View>
            <View style={styles.activityNameContainer}>
              <Text style={styles.activityName}> Activity Name </Text>
              <TextInput
                style={styles.activityNameInput}
                // onChangeText={onChangeText}
                value={name}
              />
            </View>

            {/* <View style={styles.topSection}>
              <Text style={styles.name}>{name}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <MaterialCommunityIcons name="close" size={30} color="black" />
              </TouchableOpacity>
              <Button title="Close" onPress={closeModal} />
            </View>
            <View style={styles.horizontalLine} />
            <View style={styles.middleSection}>
              <Text style={styles.description}>{category} </Text>
              <Text style={styles.description}>{description} </Text>
            </View>
            <MaterialCommunityIcons name="trash-can-outline" size={40} color="black" />
            <MaterialCommunityIcons name="pencil-outline" size={40} color="black" />
            <Link
              style={styles.editActivityContainer}
              href={{
                pathname: "/activities/editActivity",
                params: {
                  currentActivity: {activity},
                },
              }}
              onPress={closeModal}
            >
              <View style={styles.editActivityButton}>
                <Text style={styles.editActivityText}> Edit Activity</Text>
              </View>
            </Link> */}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  modal: {
    height: "80%",
    width: "95%",
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
  },
  titleContainer: {
    height: "10%",
    width: "80%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    alignSelf: "center",
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  activityNameContainer: {
    paddingTop: "5%",
    height: "15%",
    width: "95%",
    gap: "10%",
  },
  activityName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
  },
  activityNameInput: {
    marginHorizontal: 12,
    backgroundColor: "#DCDCDC",
    borderRadius: 5,
    padding: 10,
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
  descriptionContainer: {
    backgroundColor: Themes.colors.salmon,
    borderRadius: 10,
    paddingHorizontal: 15,
    width: "80%"
  },
  description: {
    color: "white",
    fontSize: 15,
    paddingTop: 10,
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