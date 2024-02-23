import React, { useState, useEffect, createContext } from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import { Alert } from "react-native";

const DiceContext = createContext(null);

const DiceContextProvider = ({ children }) => {
  // const [dice, setDice] = useState(null);

  const initializeDiceDatabaseEntry = async (
    newDice,
  ) => {
    console.log("initializing dice database entry", newDice.diceId);
    try {
      // Insert new record into the dice table
      const { data, error } = await supabase.from("Dice").insert([
        {
          name: newDice.name,
          description: newDice.description,
          choices: newDice.choices,
          categoryID: newDice.categoryID,
          creator: newDice.creator,
          community: newDice.community,

          rollHistory: [],
          saves: 0,
        },
      ]);
      if (error) throw error;

      console.log("adding dice to creator's dice");
      try {
        const { data, error } = await supabase
          .from('users')
          .select('savedDice')
          .eq('uid', newDice.creator)
          .single();
        if (error) throw error;
        data.savedDice.push(newDice.diceId);
        return data;
      } catch (error) {
        console.error("Error fetching user from uid: ", error);
      }
      
      // Return the new dice
      return data;
    } catch (err) {
      console.error("Error inserting data: ", err.message);
    }
  };

  const fetchDiceFromDiceId = async (diceId) => {
    try {
      const { data, error } = await supabase
        .from("Dice")
        .select("*")
        .eq("diceId", diceId)
        .single();
      if (error) throw error;
      return data;
    } catch (error) {
      console.error("Error fetching dice from diceId: ", error);
    }
  };

  // const writeToDatabase = async (data) => {
  //   if (!user) return;

  //   try {
  //     await setDoc(doc(db, "users", user.uid), data);
  //   } catch (error) {
  //     console.error("Error writing to Firestore: ", error);
  //   }
  // };

  // Auth State Changes
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((currentUser) => {
  //     setUser(currentUser);
  //   });
  //   return unsubscribe;
  // }, []);

  return (
    <DiceContext.Provider
      value={{
        // user,
        // writeToDatabase,
        initializeDiceDatabaseEntry,
        fetchDiceFromDiceId,
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export { DiceContext, DiceContextProvider };
