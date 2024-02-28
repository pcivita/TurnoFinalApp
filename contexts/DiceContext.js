import React, { useState, useEffect, createContext } from "react";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const DiceContext = createContext(null);

const DiceContextProvider = ({ children }) => {
  // const [dice, setDice] = useState(null);

  const initializeDiceDatabaseEntry = async (newDice) => {
    console.log("initializing dice database entry", newDice.diceId);
    try {
      // Insert new record into the dice table
      const { data, error } = await supabase.from("Dice").insert([
        {
          diceId: newDice.diceId,
          name: newDice.name,
          description: newDice.description,
          choices: newDice.choices,
          categoryID: newDice.categoryID,
          creator: newDice.creator,
          community: newDice.community,
          imageUri: newDice.imageUri,
          rollHistory: [],
          saves: 0,
        },
      ]);
      if (error) throw error;
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
      // console.log("DICE DATA: ", data);
      return data;
    } catch (error) {
      console.error("Error fetching dice from diceId: ", error);
      return null;
    }
  };

  const fetchCommunityDice = async (currentUid) => {
    try {
      const { data, error } = await supabase
        .from("Dice")
        .select("*")
        .neq("creator", currentUid);
        // .single();
      if (error) throw error;

      return data;
    } catch (error) {
      console.error("Error fetching dice from diceId: ", error);
      return null;
    }
  };
  
  return (
    <DiceContext.Provider
      value={{
        // user,
        // writeToDatabase,
        initializeDiceDatabaseEntry,
        fetchDiceFromDiceId,
        fetchCommunityDice
      }}
    >
      {children}
    </DiceContext.Provider>
  );
};

export { DiceContext, DiceContextProvider };
