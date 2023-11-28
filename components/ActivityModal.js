import React from 'react';
import { Modal, View, Text, Button, StyleSheet, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { Link } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Themes } from "../assets/Themes";

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
            <View style={styles.topSection}>
              <Text style={styles.name}>{name}</Text>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <MaterialCommunityIcons name="close" size={30} color="black" />
              </TouchableOpacity>
              {/* <Button title="Close" onPress={closeModal} /> */}
            </View>
            {/* <View style={styles.horizontalLine} /> */}
            <View style={styles.middleSection}>
              <Text style={styles.description}>{description} </Text>
              <Text>Category: {category} </Text>
              <MaterialCommunityIcons name="trash-can-outline" size={40} color="black" />
              <MaterialCommunityIcons name="pencil-outline" size={40} color="black" />
              <Text>Move to: {otherSection} </Text>
            </View>
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
            </Link>
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
    height: 400,
    width: 320,
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
  topSection: {
    width: "100%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 10,
  },
  name: {
    fontSize: 30,
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
    height: "60%",
    borderRadius: 10,
    paddingHorizontal: 15,
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