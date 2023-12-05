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

export default function Page() {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  // const [bottomSheetPostId, setBottomSheetPostId] = useState(null);

  // const handleOpenBottomSheet = (postId) => {
  //   setBottomSheetPostId(postId);
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.banner}>
          <FontAwesome5
            name="dice-five"
            style={styles.headerDice}
            size={30}
            color={"white"}
            transform={[{ rotate: "45deg" }]}
          />
          <Text style={styles.title}>Profiles</Text>
          <FontAwesome5
            name="cog"
            style={styles.headerDice}
            size={30}
            color={"white"}
            transform={[{ rotate: "45deg" }]}
          />
        </View>
      </View>
      <View style={styles.main}>
        {/* <View style={styles.profileCard}>
          <ProfileCard />
        </View> */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileCard}>
            <ProfileCard />
          </View>
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
    // borderColor: "black",
    // borderWidth: 2,
  },

  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  post: {
    // borderColor: "black",
    // borderWidth: 2,
  },
});
