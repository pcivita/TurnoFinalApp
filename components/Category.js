import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Category({ id, isSelected, onSelect, categoryName, iconName }) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selected : null]}
      onPress={() => onSelect(id)}
    >
      <FontAwesome5 style={styles.icon} name={iconName} size={40} color={Themes.colors.salmon}/>
      <Text style={styles.categoryText}> {categoryName} </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",

    borderColor: Themes.colors.mediumGray,
    borderRadius: 20,
    borderWidth: 3,
  },
  icon: {
    // alignSelf: "center",
  },
  categoryText: {
    // alignSelf: "center",
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
