import React, { useState, useEffect, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Alert } from "react-native";

const UserContext = createContext(null);

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      return userCredential.user;
      //   await initializeUserDatabaseEntry(email, profilePicUri, userCredential.user.uid);
    } catch (error) {
      console.error("Error signing up: ", error);
      Alert.alert("Error signing up", error.message);
      throw error;
    }
  };

  const initializeUserDatabaseEntry = async (
    email,
    profilePicUri,
    uid,
    username,
    fullName
  ) => {
    // create an entry in supabase for the user
    // console.log("initializing user database entry", uid)
    try {
      // Insert a new record into the 'users' table
      const { data, error } = await supabase.from("users").insert([
        {
          email: email,
          profilePicUri: profilePicUri,
          uid: uid,
          fullName,
          fullName,
          username: username,
          savedDice: [],
          rollHistory: [],
          onboardingCompleted: false,
        },
      ]);

      // Handle any errors
      if (error) throw error;

      // Return the inserted data
      return data;
    } catch (err) {
      console.error("Error inserting data: ", err.message);
    }
  };

  const fetchUserFromUid = async (uid) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("uid", uid)
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching user from uid: ", error);
    }
  };

  const fetchSavedDiceFromUid = async (uid) => {
    try {
      const { data, error } = await supabase
        .from("users")
        .select("savedDice")
        .eq("uid", uid)
        .single();
      if (error) throw error;

      // console.log("savedDice ids: ", data.savedDice);
      return data.savedDice;
    } catch (error) {
      console.error("Error fetching user from uid: ", error);
    }
  };

  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      // Additional setup can go here
    } catch (error) {
      console.error("Error logging in: ", error);
      Alert.alert(parseLoginError(error));
    }
  };

  const parseLoginError = (error) => {
    if (error.code === "auth/user-not-found") {
      return "No user found with that email address.";
    }
    if (error.code === "auth/wrong-password") {
      return "Incorrect password. Please try again.";
    }
    if (error.code === "auth/invalid-email") {
      return "Invalid email address. Please make sure the email was entered correclty or try using a new email.";
    }
    return error.message;
  };

  // const uploadImage = async (imageFile, user) => {

  //   if (!user) return;

  //   console.log(user)
  //   console.log(imageFile)

  //   const storageRef = ref(storage, `images/${user.uid}/${imageFile.name}`);
  //   try {
  //     await uploadBytesResumable(storageRef, imageFile);
  //     return await getDownloadURL(storageRef);
  //   } catch (error) {
  //     console.error("Error uploading image: ", error);
  //   }
  // };

  const logoutUser = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  const writeToDatabase = async (data) => {
    if (!user) return;

    try {
      await setDoc(doc(db, "users", user.uid), data);
    } catch (error) {
      console.error("Error writing to Firestore: ", error);
    }
  };

  // Auth State Changes
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const addDiceToUser = async (uid, diceId) => {
    userData = await fetchUserFromUid(uid);
    const updatedSavedDice = [...userData.savedDice, diceId];
    // console.log(uid, diceId)
    try {
      const { updateError } = await supabase
        .from("users")
        .update({ savedDice: updatedSavedDice })
        .eq("uid", uid);
      if (updateError) throw updateError;
      const updatedUser = await fetchUserFromUid(uid); // Re-fetch user data to update asap
      setUser(updatedUser);
      // console.log("UPDATED USER!!! ", updatedUser);
    } catch (error) {
      console.error("Error adding dice to user:", error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signUp,
        logIn,
        // uploadImage,
        writeToDatabase,
        initializeUserDatabaseEntry,
        logoutUser,
        fetchUserFromUid,
        fetchSavedDiceFromUid,
        addDiceToUser,
        // fetchDiceIdsfromUid
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
