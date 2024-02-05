import React, { useState, useEffect, createContext } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';

const UserContext = createContext(null)

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);


  const signUp = async (email, password, profilePicUri) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      return userCredential.user;
    //   await initializeUserDatabaseEntry(email, profilePicUri, userCredential.user.uid);
    } catch (error) {
      console.error("Error signing up: ", error);
      throw error; // rethrow the error to be caught in handleSignUp
    }
  }

  

  const initializeUserDatabaseEntry = async (email, profilePicUri, uid) => {
    // create an entry in supabase for the user
    console.log("initializing user database entry", uid)
    try {
      // Insert a new record into the 'users' table
      const { data, error } = await supabase
          .from('users')
          .insert([
              { email: email, profile_pic_uri: profilePicUri, uid: uid }
          ]);

      // Handle any errors
      if (error) throw error;

      // Return the inserted data
      return data;
  } catch (err) {
      console.error('Error inserting data: ', err.message);
  }
  }

  const logIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
      // Additional setup can go here
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  const uploadImage = async (imageFile) => {
    if (!user) return;

    const storageRef = ref(storage, `images/${user.uid}/${imageFile.name}`);
    try {
      await uploadBytesResumable(storageRef, imageFile);
      return await getDownloadURL(storageRef);
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

  const logoutUser = async () => {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  }

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

  return (
    <UserContext.Provider
      value={{
        user,
        signUp,
        logIn,
        uploadImage,
        writeToDatabase,
        initializeUserDatabaseEntry,
        logoutUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };
