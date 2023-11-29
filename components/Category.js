import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";

export default function Category({ id, isSelected, onSelect, categoryName }) {
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
      <Text style={styles.categoryText}> {categoryName} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "black",
  },
  icon: {
    alignSelf: "center",
  },
  categoryText: {
    alignSelf: "center",
  },
  component: {
    padding: 20,
    margin: 10,
    borderColor: "gray",
  },
  selected: {
    backgroundColor: Themes.colors.salmon,
  },
});
