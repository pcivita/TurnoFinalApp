import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import Images from "../assets/Themes/Images";
import { useFonts } from "expo-font";
import { Themes } from "../assets/Themes";

export default function ProfileCard({
  isYourProfile,
  profileName,
  handle,
  profilePic,
}) {
  const handleFriends = () => {
    console.log("Pressed");
  };

  const imageDict = {
    Pedro: require("../assets/Themes/Images/profileImages/IMG_9521.jpg"),
    Malina: require("../assets/Themes/Images/profileImages/Malina.jpg"),
    Naz: require("../assets/Themes/Images/profileImages/Naz.heic"),
    Cecilia: require("../assets/Themes/Images/profileImages/Cecilia.jpg"),
    Matt: require("../assets/Themes/Images/profileImages/Matt.jpg"),
    Digo: require("../assets/Themes/Images/profileImages/Digo.jpeg"),
    Luca: require("../assets/Themes/Images/profileImages/Luca.jpeg"),
  };

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={imageDict[profilePic]} style={styles.profileImg} />
      </View>
      <Text style={styles.profileName}>{profileName}</Text>

      <Text style={styles.handle}>{handle}</Text>
      {isYourProfile ? (
        <Link
          href={{
            pathname: "/friendsPage",
            params: { previousPage: "Profile" },
          }}
        >
          <View>
            <View style={styles.friendsBox}>
              <Text style={styles.handle}> 4 friends </Text>
            </View>
          </View>
        </Link>
      ) : (
        <View style={styles.addFriendBox}>
          <Text style={styles.handle}> Your Friend </Text>
        </View>
      )}
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
    textAlign: "center",
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
    color: "white",
  },
});
