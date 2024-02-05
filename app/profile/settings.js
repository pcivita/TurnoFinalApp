import { StyleSheet, Text, View, TextInput,
  Keyboard,
  TouchableOpacity,
  Dimensions, } from "react-native";
import { Link, Stack, router } from "expo-router";
import { Themes } from "../../assets/Themes";
import Category from "../../components/Category";
import Header from "../../components/Header";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Page() {
  const {logoutUser, user} = useContext(UserContext);
  const [uid, setUid] = useState(null);
  useEffect(() => {
    if (user) {
      setUid(user.uid);
    }
  }, [user])

  const handleLogout = () => {
    router.replace("/");
    logoutUser();
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{headerShown: false }}
      />
      <Header title="Settings" />
      <View style={styles.activityNameContainer}>
        <Text style={styles.subtitle}>User ID</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value={uid ? uid : ""}
          // onChangeText={setActivityName}
        />
      </View>
      <View style={styles.activityNameContainer}>
        <Text style={styles.subtitle}>Username</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value="pcivita"
          // onChangeText={setActivityName}
        />
      </View>
      <View style={styles.activityNameContainer}>
        <Text style={styles.subtitle}>Password</Text>
        <TextInput
          editable={false}
          style={styles.input}
          value="*****************"
          // onChangeText={setActivityName}
        />
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.addToDiceContainer}>
        <Link
          // disabled={!isFormFilled}
          href={{
            pathname: "/activities/home",
            params: {
              name: "Alan",
            },
          }}
          // onPress={handleAddActivity}
        >
          <View
            // style={isFormFilled ? styles.buttonEnabled : styles.buttonDisabled}
          >
            <Text style={styles.addToDice}>Add to Dice</Text>
          </View>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    gap: 5,
    backgroundColor: Themes.colors.background
  },
  logoutButton: {
    backgroundColor: Themes.colors.salmon,
    padding: 20,
    width: windowWidth * 0.6,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginTop: 32,
    alignSelf: "center",
  },
  logoutText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  titleContainer: {
    height: "10%",
    backgroundColor: Themes.colors.salmon,
    borderColor: "black",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 32,
    color: "white",
    alignSelf: "center",
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    marginHorizontal: 12,
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  input: {
    flex: 1,
    marginHorizontal: 12,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    backgroundColor: Themes.colors.lightGray,
    borderRadius: 5,
    borderWidth: 3,
    borderColor: Themes.colors.lightGray,
    padding: 10,
  },
  activityNameContainer: {
    paddingTop: "3%",
    height: "14%",
    gap: "10%",
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
