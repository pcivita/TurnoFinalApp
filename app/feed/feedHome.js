import { StyleSheet, Text, View, Button, SectionList, Modal, ScrollView } from "react-native";
import { router, Link, Stack, useLocalSearchParams } from "expo-router";
import { Themes } from "../../assets/Themes";
import { useState, useEffect, useContext } from "react";
import Activity from "../../components/Activity";
import { useFonts } from "expo-font";
import { FontAwesome5 } from "@expo/vector-icons";
import Post from "../../components/Post";
import Header from "../../components/Header";

export default function Page() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <Header title="Feed" />
      <View style={styles.main}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Post style={styles.post} postId={1} />
          <Post style={styles.post} postId={2} />
          <Post style={styles.post} postId={3} />
          <Post style={styles.post} postId={4} />
          <Post style={styles.post} postId={5} />
          <Post style={styles.post} postId={6} />
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
    height: "14%",
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
  headerFriends: {
    marginTop: 5
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
    // borderColor: "black",
    // borderWidth: 2,
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
