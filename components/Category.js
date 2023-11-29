import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from '@expo/vector-icons';

export default function Category({ id, isSelected, onSelect, categoryName, iconName }) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedContainer : null]}
      onPress={() => onSelect(id)}
    >
      <FontAwesome5 
        style={styles.icon} 
        name={iconName} 
        size={40} 
        color={isSelected ? Themes.colors.lightGray : Themes.colors.salmon }
      />
      <Text style={[styles.categoryText, isSelected ? styles.selectedText : null]}>{categoryName}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.lightGray,
    borderColor: Themes.colors.mediumGray,
    borderRadius: 20,
    borderWidth: 3,
    paddingTop: 15,
    paddingBottom: 15,
  },

  selectedContainer: {
    backgroundColor: Themes.colors.salmon,
  },
  categoryText: {
    fontSize: 14,
    color: Themes.colors.salmon,
  },
  selectedText: {
    color: "white",
  }
});
