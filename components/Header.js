import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link } from "expo-router";
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
        style={styles.leftIcon}
      />
      <Text style={styles.title}>{title}</Text>
      {(title === "Profile" || title === "Feed") && (
        <Link 
          href={ title === "Profile" ? {pathname: "/profile/settings"} : {pathname: "/feed/myFriends"}} 
          style={styles.rightIcon}
        >
          <FontAwesome5
            name={title === "Profile" ? "cog" : "user-friends"} 
            size={25}
            color={"white"}
          />
        </Link>
      )}
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
  leftIcon: {
    position: "absolute",
    left: 15,
    top: 65,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  rightIcon: {
    position: "absolute",
    right: 15,
    top: 65
  },
});
