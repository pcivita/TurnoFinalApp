import { Link, router } from "expo-router";
import React, { useContext, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Themes } from "../assets/Themes";
import { FontAwesome5 } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import ProfileCard from "../components/ProfileCard";
import { Profile } from "../components/Profile";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../contexts/UserContext";
import { ActivityIndicator } from "react-native-paper";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Onboarding() {
  const [currentScreen, setCurrentScreen] = useState("onboarding");
  const [profilePicUri, setProfilePicUri] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [fullName, setFullName] = useState("");

  const { user, logIn, logoutUser, signUp, initializeUserDatabaseEntry } =
    useContext(UserContext);
  useEffect(() => {
    if (user) {
      router.replace("/roll");
    }
  }, [user]);

  const handleLogIn = () => {
    logIn(email.toLowerCase(), password);
  };

  const uploadImage = async (imageUri) => {
    try {
      const response = await fetch(imageUri);
      const blob = await response.blob();

      // Check the size of the image
      if (blob.size > 32000000) {
        // 32 MB limit
        Alert.alert(
          "Image size exceeds the maximum limit of 32 MB. Please select another image."
        );
        // Optionally, compress the image or inform the user
        return null;
      }

      const uniqueFileName = `${Date.now()}_${Math.floor(
        Math.random() * 10000
      )}`;
      const fileName = `profile_pictures/${uniqueFileName}`;
      const storageRef = ref(storage, fileName);

      const snapshot = await uploadBytesResumable(storageRef, blob);
      const downloadURL = await getDownloadURL(snapshot.ref);

      return downloadURL;
    } catch (error) {
      console.error("Error uploading image: ", error);
      // Handle the error appropriately
      return null;
    }
  };

  //import poppins
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../assets/Poppins/Poppins-Regular.ttf"),
    // "Poppins-SemiBold": require("./assets/Poppins/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("../assets/Poppins/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  }

  const handleSignUp = async () => {
    setLoading(true);
    if (email && password) {
      try {
        const user = await signUp(email, password);
        if (user) {
          await initializeUserDatabaseEntry(
            email,
            downloadUrl,
            user.uid,
            username,
            fullName
          );

          setEmail("");
          setPassword("");
          setUsername("");
          setProfilePicUri(null);

          setCurrentScreen("onboarding");
        }
      } catch (error) {
        console.error("Error in sign-up process: ", error);
        // Handle the error appropriately here (e.g., show a message to the user)
      }
    }
    setLoading(false);
  };

  const renderOnboarding = () => {
    return (
      <View style={styles.container}>
        <View style={styles.onboardingSpacing} />
        <Image
          source={require("../assets/Themes/Images/DiceFaces/Dice-3.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Turno</Text>
        <Text style={styles.subtitle}>Roll your way through the day</Text>
        <TouchableOpacity
          onPress={() => setCurrentScreen("log in")}
          style={styles.loginButton}
        >
          <Text style={styles.onBoardingButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setCurrentScreen("sign up")}
          style={styles.signUpButton}
        >
          {loading ? (
            <ActivityIndicator size="small" color="white" />
          ) : (
            <Text style={styles.onBoardingButtonText}>Sign Up</Text>
          )}
        </TouchableOpacity>
        {/* FOR TESTING */}
        {/* <TouchableOpacity onPress={() => router.replace('/roll')} style={styles.loginButton}>
            <Text style={{color: 'white', fontWeight: 'bold'}}>Bypass Auth (for testing will delete later)</Text>
        </TouchableOpacity> */}
      </View>
    );
  };

  const renderLogIn = () => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setCurrentScreen("onboarding")}
          style={styles.backCaret}
        >
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <View style={styles.spacing} />
        <Image
          source={require("../assets/Themes/Images/DiceFaces/Dice-3.png")}
          style={styles.logo}
        />
        <Text style={styles.title}>Turno</Text>
        <Text style={styles.subtitle}>Roll your way through the day</Text>
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={{ height: 32 }} />
        {/* <Link
            href={{
                pathname: "/roll",
            }}
        > */}
        <TouchableOpacity onPress={handleLogIn} style={styles.loginButton}>
          <Text style={styles.loginText}>Log In</Text>
        </TouchableOpacity>
        {/* </Link> */}
      </View>
    );
  };

  const renderSignUp = () => {
    const selectPhoto = async () => {
      try {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 4],
          quality: 0.5, // Lower quality for testing
        });

        if (!result.canceled) {
          setProfilePicUri(result.assets[0].uri);
          const downloadURL = await uploadImage(result.assets[0].uri);
          setDownloadUrl(downloadURL);
        }
      } catch (error) {
        console.error("Error picking image: ", error);
        // Handle the error (e.g., show an alert to the user)
      }
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setCurrentScreen("onboarding")}
          style={styles.backCaret}
        >
          <FontAwesome5 name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        {/* <View style={styles.spacing}/> */}
        <Text style={styles.title}>Turno</Text>
        <TouchableOpacity
          style={styles.profileUploader}
          onPress={() => selectPhoto()}
        >
          <Image
            source={require("../assets/Vectors/EditPencil.png")}
            style={{ position: "absolute", zIndex: 99, right: -5, top: -5 }}
          />
          {profilePicUri ? (
            <Image
              source={{ uri: profilePicUri }}
              style={{ width: 100, height: 100, borderRadius: 50 }}
            />
          ) : (
            <Profile width={100} height={100} />
          )}
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text) => setEmail(text.toLowerCase())}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Full Name (ex: Caleb Liu)"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text) => setUsername(text.toLowerCase())}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={(text) => setPassword(text.toLowerCase())}
          value={password}
        />

        <View style={{ height: 32 }} />
        {/* <Link href={{ pathname: '/roll' }}> */}
        <TouchableOpacity onPress={handleSignUp} style={styles.signUpButton}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        {/* </Link> */}
        <Text style={styles.submessageText} onPress={() => setCurrentScreen('log in')}>

          Already have an account? Log In
        </Text>
      </View>
    );
  };

  switch (currentScreen) {
    case "log in":
      return renderLogIn();
    case "sign up":
      return renderSignUp();
    default:
      return renderOnboarding();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    backgroundColor: Themes.colors.background,
    zIndex: 1,
  },
  logo: {
    width: 75,
    height: 75,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 16,
    marginVertical: 8,
    fontFamily: "Poppins-Regular",
  },
  input: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "gray",
    padding: 10,
    marginVertical: 8,
    color: "#000",
    fontFamily: "Poppins-Regular",
  },
  loginButton: {
    width: windowWidth * 0.6,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 16,
    backgroundColor: Themes.colors.salmon,    
    },
    loginText: {
        fontSize: 16,
        fontFamily: 'Poppins-Bold',
        color: 'white',
    },
    submessageText: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: 'black',
        marginTop: 12,
    },
  signUpButton: {
    width: windowWidth * 0.8,
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 16,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { height: 4, width: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    marginTop: 16,
    backgroundColor: Themes.colors.salmon,
  },
  loginButton: {
    width: windowWidth * 0.8,
    alignItems: "center",
    width: windowWidth * 0.8,
    alignItems: "center",
    borderRadius: 5,
    paddingVertical: 16,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOffset: { height: 4, width: 1 },
    shadowOpacity: 0.75,
    shadowRadius: 2,
    marginTop: 16,
    backgroundColor: Themes.colors.blue,
  },

  onBoardingButtonText: {
    fontSize: 16,
    fontFamily: "Poppins-Bold",
    color: "white",
  },
  backCaret: {
    alignSelf: "flex-start",
    marginTop: 50,
    alignSelf: "flex-start",
    width: windowWidth * 0.9,
    height: 50,
  },
  spacing: {
    height: windowHeight * 0.25 - 100,
  },
  onboardingSpacing: {
    height: windowHeight * 0.25,
  },
  profileUploader: {
    marginTop: 16,
  },
});
