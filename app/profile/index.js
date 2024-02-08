import { StyleSheet, Text, View } from "react-native";
import { Themes } from "../../assets/Themes";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import ProfileCard from "../../components/ProfileCard";
import { useState,  useEffect, useContext } from "react";
import { PostsProvider } from "../../contexts/PostsContext";
import Header from "../../components/Header";
import MyPosts from "../../components/ProgressScreens/MyPosts";
import Stats from "../../components/ProgressScreens/Stats";
import ProfileNavigation from "../../components/ProfileNavigation";
import { UserContext } from "../../contexts/UserContext";

export default function Page() {
  //const [data, setData] = useState();

  const [activeScreen, setActiveScreen] = useState("Posts"); // Initial state

  const [userData, setUserData] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      let result = await fetchUserFromUid(user.uid);
      setUserData(result);
    }
    if (user) {
      fetchUserData();
      console.log(userData);
    }
  }, [user])
  
  const {fetchUserFromUid, user} = useContext(UserContext);

  handleData = (data) => {
    setActiveScreen(data);
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }
  

  return (
    <>
    {userData &&
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Profile" />

      <View style={styles.profileCard}>
        <ProfileCard
          isYourProfile={true}
          profileName={userData.fullName}
          handle={"@" + userData.username}
          profilePic={userData.profilePicUri}
        />
      </View>

      <View style={styles.buttonContainer}>
        <ProfileNavigation onData={handleData} />
      </View>

      <View style={styles.subscreenContainer}>
        {activeScreen === "Posts" && <MyPosts />}
        {activeScreen === "Stats" && <Stats />}
      </View>
    </View>
    }
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display: "flex",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  subscreenContainer: {
    flex: 1,
    height: 200,
  },
  buttonContainer: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
  },
  profileCard: {
  }
});
