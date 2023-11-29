import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from '@expo/vector-icons';

export default function CategoryDisabled({ categoryName, iconName }) {
  return (
    <View
      style={styles.container}
    >
      <FontAwesome5 
        style={styles.icon} 
        name={iconName} 
        size={40} 
        color={Themes.colors.lightGray}
      />
      <Text style={styles.categoryText}>{categoryName}</Text>
    </View>
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
    backgroundColor: Themes.colors.salmon,
  },
  categoryText: {
    fontSize: 14,
    color: "white",
  },
});
