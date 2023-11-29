import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../../assets/Themes";

export default function ViewActivity({ id, isSelected, onSelect }) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : null]}
      onPress={() => onSelect(id)}
    >
      <Ionicons
        name="home-outline"
        size={70}
        color={"black"}
        style={styles.icon}
      />
      <Text style={styles.categoryText}> Category </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 5,
  },
  titleContainer: {
    height: "10%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    alignSelf: "center",
  },
  activityNameContainer: {
    paddingTop: "5%",
    height: "15%",
    // borderWidth: 2,
    // borderColor: "black",
    gap: "10%",
  },
  activityName: {
    marginHorizontal: 12,
    fontSize: 24,
    fontWeight: "bold",
    // borderWidth: 2,
    // borderColor: "black",
  },
  activityNameInput: {
    marginHorizontal: 12,
    backgroundColor: "#DCDCDC",
    borderRadius: 5, // Optional: for rounded corners
    padding: 10,
  },
  descriptionContainer: {
    paddingTop: "5%",
    height: "25%",
    // borderWidth: 2,
    // borderColor: "black",
    gap: "10%",
  },
  descriptionInput: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 12,
    backgroundColor: "#DCDCDC",
    borderRadius: 5, // Optional: for rounded corners
    padding: 10,
  },
  categoriesContainer: {
    gap: 10,
    margin: 12,
    flex: 1,
    height: "32%",
    //borderWidth: 2,
    //borderColor: "black",
    flexDirection: "row", // Align children in a row
    flexWrap: "wrap", // Allow items to wrap to the next line
    justifyContent: "space-between", // Optional, for spacing between items
  },
  addToDiceContainer: {
    height: "8%",
    // borderWidth: 2,
    // borderColor: "black",
    margin: 12,
    justifyContent: "flex-end", // Align children vertically to the end
    alignItems: "flex-end", // Align children horizontally to the end
  },
  buttonEnabled: {
    backgroundColor: Themes.colors.salmon,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  buttonDisabled: {
    backgroundColor: Themes.colors.lightGray,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
    // borderWidth: 2,
    // borderColor: "black",
  },
  addToDice: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});
