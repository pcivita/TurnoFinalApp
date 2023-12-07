import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../assets/Themes";
import { Link } from "expo-router";
import Post from "../components/Post";
import { useFonts } from "expo-font";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ProfileCard from "../components/ProfileCard";
import { useState } from "react";
import Header from "../components/Header";
import Images from "../assets/Themes/Images";

export default function Page() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileCard}>
            <ProfileCard 
              isYourProfile={true}
              profileName="Pedro Civita"
              handle="@pcivita"
              profilePic={Images.profileImages.pedro}
            />
          </View>
          <View style={styles.postTextContainer}>
            <Text style={styles.postText}>Posts</Text>
          </View>
          <Post
            postId={1}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
          <Post
            postId={2}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
          <Post
            postId={3}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
          <Post
            postId={4}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
          <Post
            postId={5}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
          <Post
            postId={6}
            handle={"@pcivita"}
            activityName={"Lake Lag"}
            profilePic={Images.profileImages.pedro}
          />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: "16%",
    paddingBottom: 12,
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
  },
  banner: {
    paddingHorizontal: 20,
    // borderWidth: 2,
    // borderColor: "blue",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDice: {
    // borderWidth: 2,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    marginHorizontal: "auto",
  },
  postTextContainer: {
    height: 30,
    paddingHorizontal: 20,
    alignItems: "flex-start",
    justifyContent: "center"
  },

  postText: {
    fontFamily: "Poppins-Bold",
    fontSize: 20,
  }
});
