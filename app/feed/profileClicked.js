import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { Link, Stack, useNavigation, useRouter, useLocalSearchParams } from "expo-router";
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
  const navigation = useNavigation();
  const router = useRouter();
  const params = useLocalSearchParams();
  const { profileName, handle, profilePic } = params;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "",
          headerStyle: {
            backgroundColor: Themes.colors.salmon,
          },
          headerTintColor: "white",
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Profile</Text>
      </View>
      <View style={styles.profileCard}>
        <ProfileCard 
          isYourProfile={false}
          profileName={profileName}
          handle={handle}
          profilePic={profilePic}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 5,
    backgroundColor: "white",
  },
  titleContainer: {
    height: "10%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    alignSelf: "center",
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
