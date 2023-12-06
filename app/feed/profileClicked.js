import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { Link } from "expo-router";
import Post from "../../components/Post";
import { useFonts } from "expo-font";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { FontAwesome5 } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import ProfileCard from "../../components/ProfileCard";
import { useState } from "react";
import Header from "../../components/Header";
import Images from "../../assets/Themes/Images";

export default function Page() {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileCard}>
            <ProfileCard />
          </View>
          <Post
            style={styles.post}
            postId={1}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
          />
          <Post
            style={styles.post}
            postId={2}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
          />
          <Post
            style={styles.post}
            postId={3}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
          />
          <Post
            style={styles.post}
            postId={4}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
          />
          <Post
            style={styles.post}
            postId={5}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
          />
          <Post
            style={styles.post}
            postId={6}
            imageSource={Images.profileImages.pedro}
            profile={"@pcivita"}
            activityName={"Lake Lag"}
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
});
