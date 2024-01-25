import React, { useState, useEffect, createContext } from 'react';

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection, doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db, storage } from '../firebase';

const FirebaseContext = createContext(null)

const FirebaseProvider = ({ children }) => {
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
    try {
       const userDocRef = doc(db, "users", uid);
        console.log("userDocRef: ", userDocRef);
    //    await setDoc(userDocRef, {
    //     email: email,
    //     profilePicUri: profilePicUri,
    //    }, { merge: true });
    } catch (error) {
        console.error("Error initializing user database entry: ", error);
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
    <FirebaseContext.Provider
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
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
