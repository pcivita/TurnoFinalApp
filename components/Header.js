import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Header({ title }) {
  let backPath;
  switch (title) {
    case "Settings":
      backPath = {pathname: "/profile"};
      break;
    case "Create Activity":
      backPath = {pathname: "/activities/home"};
      break;
    case "Friends":
      backPath = {pathname: "/feed/feedHome"};
      break;
  }


  return (
    <View style={styles.container}>
      {(title === "Settings" || title === "Create Activity" || title === "Friends") ?
        <Link href={backPath}>
          <FontAwesome5
            name="arrow-left"
            size={25}
            color={"white"}
            style={styles.leftIcon}
          />
        </Link>
      :
        <FontAwesome5
          name="dice-five" 
          size={25}
          color={"white"}
          transform={[{ rotate: "45deg" }]}
          style={styles.leftIcon}
        />
      }
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
