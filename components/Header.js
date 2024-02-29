import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Link, useNavigation } from "expo-router";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Header({ title, dice }) {
  let headerTitle = title;
  if (title === "Friends from Feed" || title === "Friends from Profile") {
    headerTitle = "Friends";
  }

  const navBarTitles = [
    "My Dice",
    "Feed",
    "Community Dice",
    "Profile"
  ]

  const backArrow = {
    "Settings": "/profile",
    "Create Activity": "/activities/home",
    "Friends from Feed": "/feed",
    "Friends from Profile": "/profile",
    "Roll": "/roll",
    "Activities": "/roll",
    "Create New Dice": "/roll",
  };

  const backPath = { pathname: backArrow[title] || "/" };

  return (
    <View style={styles.container}>
      <View style={styles.containerStyle1}>
        {navBarTitles.includes(title) &&
          <Text style={styles.title}>{headerTitle}</Text>
        }
      </View>


      {backArrow[title] &&
        <View style={styles.leftIcon}>
          <Link href={backPath}>
            <FontAwesome5
              name="arrow-left"
              size={25}
              color={"black"}
            />
          </Link>
        </View>
      }
      {/* <Text style={styles.title}>{headerTitle}</Text> */}
      {(title === "Profile" || title === "Feed") && (
        <Link 
          href={ title === "Profile" ? {pathname: "/profile/settings"} : {pathname: "friendsPage", previousPage: "Feed"}} 
          style={styles.rightIcon}
        >
          <FontAwesome5
            name={title === "Profile" ? "cog" : "user-friends"} 
            size={25}
            color={"black"}
          />
        </Link>
      )}
      {(title === "Roll") && (
        <Link 
          href={{ 
            pathname: "/activities", 
            params: {
              diceItem: dice
              // title: dice.title,
              // numRolled: dice.numRolled,
              // numSaved: dice.numSaved,
              // user: dice.user,
              // username: dice.user.username,
              // profilePic: dice.user.profilePic,
              // img: dice.img,
              // id: dice.id,
              // activities: dice.activities,
            }
          }} 
          style={styles.rightIcon}
        >
          <MaterialCommunityIcons
            name={"pencil"}
            size={25}
            color={"black"}
          />
        </Link>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    height: 100,
    paddingTop: 45,
    alignItems: "center",
    justifyContent: "flex-end",
    // backgroundColor: "green",
  },
  containerStyle1: {
    width: "100%",
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    // backgroundColor: "blue",
  },


  leftIcon: {
    position: "absolute",
    left: 15,
    top: 65,
  },
  title: {
    fontSize: 26,
    color: "black",
    fontFamily: "Poppins-Bold",
  },
  rightIcon: {
    position: "absolute",
    right: 15,
    top: 65
  },
});
