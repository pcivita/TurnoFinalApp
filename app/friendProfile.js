import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { Themes } from "../assets/Themes";
import Header from "../components/Header";
import FriendCard from "../components/FriendCard";
import ProfileCard from "../components/ProfileCard";

export default function Page() {
  // const router = useRouter();
  const params = useLocalSearchParams();
  const { previousPage } = params;

  console.log(params);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header
        title={
          previousPage === "Profile"
            ? "Friends from Profile"
            : "Friends from Feed"
        }
      />
      <ScrollView style={styles.activityNameContainer}>
        <ProfileCard
          isYourProfile={false}
          profileName={params.profilePic}
          handle={params.handle}
          profilePic={params.profilePic}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,

    backgroundColor: Themes.colors.background,
  },

  activityNameContainer: {
    flex: 1,
  },
  descriptionContainer: {
    paddingTop: "2%",
    height: "23%",
    gap: "10%",
  },
  categoriesContainer: {
    paddingTop: "2%",
    paddingBottom: 0,
    height: "37%",
    gap: "10%",
  },
  categories: {
    gap: 10,
    margin: 12,
    marginTop: 0,
    flex: 1,
    height: "40%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  addToDiceContainer: {
    height: "8%",
    margin: 12,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  buttonEnabled: {
    backgroundColor: Themes.colors.salmon,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  buttonDisabled: {
    backgroundColor: Themes.colors.salmonTransparent,
    padding: 10,
    width: "100%",
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  addToDice: {
    alignSelf: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  asterick: {
    color: Themes.colors.salmon,
  },
});
