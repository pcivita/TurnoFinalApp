import { Image, Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import { Themes } from "../assets/Themes";

export default function ProfileCard({ isYourProfile, profileName, handle, profilePic }) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={profilePic} style={styles.profileImg} />
      </View>
      <Text style={styles.profileName}>{profileName}</Text>
      
      <Text style={styles.handle}>{handle}</Text>
      {/* <Link href={{ pathname: "/feed/myFriends" }} > */}
      {isYourProfile ? 
        <View style={styles.friendsBox}>
          <Text style={styles.handle}> 16 friends </Text>
        </View>
        :
        <View style={styles.addFriendBox}>
          <Text style={styles.handle}> Add Friend </Text>
        </View>
      }
      {/* </Link> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300, // Keep this Standard
    gap: 4,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  imageContainer: {
    width: "30%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,

    overflow: "hidden",
  },
  profileImg: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
  postText: {
    fontFamily: "Poppins-Regular",
  },
  profileName: {
    fontSize: 24,
    fontFamily: "Poppins-Bold",
  },
  handle: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
  },
  friendsBox: {
    marginTop: 8,
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
  },
  addFriendBox: {
    borderRadius: 10,
    borderWidth: 0.5,
    padding: 10,
    // backgroundColor: Themes.colors.salmon
  },
  addFriendText: {
    fontFamily: "Poppins-Regular",
    fontSize: 17,
    color: "white"
  },
});
