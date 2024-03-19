import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Category({
  id,
  isSelected,
  onSelect,
  categoryName,
  iconName,
}) {
  return (
    <TouchableOpacity
      style={[styles.container, isSelected ? styles.selectedContainer : null]}
      onPress={() => onSelect(id)}
    >
      <FontAwesome5
        style={styles.icon}
        name={iconName}
        size={20}
        color={isSelected ? Themes.colors.background : "black"}
      />
      <Text
        style={[styles.categoryText, isSelected ? styles.selectedText : null]}
      >
        {categoryName}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",

    borderWidth: 1,
    borderColor: Themes.colors.darkGray,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 10,
    gap: 5,
  },
  categoryText: {
    fontSize: 16,
    color: "black",
    fontFamily: "Poppins-Regular",
  },
  selectedContainer: {
    backgroundColor: Themes.colors.salmon,
  },
  selectedText: {
    color: "white",
  },
});
