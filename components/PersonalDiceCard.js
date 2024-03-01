import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";
import Images from "../assets/Themes/Images";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native-gesture-handler";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PersonalDiceCard({ item, imageUri, title, subText }) {
  handleEllipsesPress = () => {
    console.log("hi");
  }

  return (
    <Link
      href={{
        pathname: `/roll/MyDiceDetails`,
        params: {
          activities: item.choices,
          title: item.name,
          img: item.imageUri,
          id: item.diceId,
          creator: item.creator,
          pageTitle: "My Dice Details"
          // profilePic: item.user.profilePic,
        },
    }}
    >
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.textCol}>
          <View style={styles.titleAndSubtitle}>
            <Text style={styles.titleText} numberOfLines={2}>{title}</Text>
            <Text style={styles.descText} numberOfLines={1}>
              {subText ? subText : " "}
            </Text>
          </View>
          
          <Link
            href={{
              pathname: `/roll/roll`,
              params: item
                ? {
                    name: item.name,
                    choices: item.choices,
                    numRolled: item.rollHistory,
                    numSaved: item.saves,
                    username: item.creator,
                    img: item.imageUri,
                    id: item.id,
                    diceId: item.diceId,
                  }
                : {},
            }}
          >
            <TouchableOpacity style={styles.button}>
              <FontAwesome5 name="dice-d6" size={16} color="white" />
              <Text style={[styles.descText, { color: "white" }]}>Roll</Text>
            </TouchableOpacity>
          </Link>
          
            <View style={styles.menuDots}>
              <TouchableOpacity onPress={handleEllipsesPress}>
                <FontAwesome5 name="ellipsis-h" size={12} color="black" />
              </TouchableOpacity>
            </View>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth * 0.95,
    borderRadius: 20,
    height: 140,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  textCol: {
    marginLeft: 5,
    padding: 10,
    // width: "70%",
    height: "90%",
    flex: 1,
    // flexDirection: "column",
    justifyContent: "space-between",
    gap: 17,
  },
  button: {
    // marginTop: 10,

    width: 220,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
    gap: 8,
    borderRadius: 30,
    paddingVertical: 6,
  },
  menuDots: {
    position: "absolute",
    right: 0,
    top: 0,
    padding: 10,
  },
  image: {
    width: 100,
    // height: 110,
    height: "90%",
    borderRadius: 10,
  },
  titleAndSubtitle: {
    height: 50,
  },
  titleText: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    width: "90%",
    lineHeight: 18,
  },
  descText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
});
