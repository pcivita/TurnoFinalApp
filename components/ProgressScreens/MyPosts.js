import { View, StyleSheet, SafeAreaView, FlatList, Animated, ScrollView, Text } from "react-native";
import StatsCard from "../StatsCard"
import { Themes } from "../../assets/Themes";
import { useRef } from "react";
import Supabase from "../../Supabase";
import { useEffect } from "react";
import Post from "../Post.js"

export default function MyPosts() {

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Post
        isYourPost={true}
        key={1}
        id={1}
        postIndex={1}
        profilePost={true}
        handle={"pcivita"}
        // profilePic={post.user_profile_pic}
        activityName={"went on a runnnn"}
        comments={["first comment"]}
      />
    </ScrollView>
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
