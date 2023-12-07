import { Text, View, StyleSheet } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from '@expo/vector-icons';

export default function CategoryDisabled({ id, categories }) {
  const categoryName = categories[id - 1][0];
  const iconName = categories[id - 1][1]; 

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
    height: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.lightGray,
    borderColor: Themes.colors.mediumGray,
    borderRadius: 20,
    borderWidth: 3,
    paddingVertical: 14,
    backgroundColor: Themes.colors.salmon,
  },
  categoryText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Poppins-Regular"
  },
});
