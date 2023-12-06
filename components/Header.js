import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header({ title }) {
  return (
    <View style={styles.container}>
      <FontAwesome5
        name="dice-five"
        size={25}
        color={"white"}
        transform={[{ rotate: "45deg" }]}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FontAwesome5
        name="cog"
        size={25}
        color={"white"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    height: 110,
    paddingTop: 45,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Themes.colors.salmon,
  },
  titleContainer: {
    width: 210,
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
});
