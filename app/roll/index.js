import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import React, { useContext, useState, useEffect } from "react";
import Header from "../../components/Header";
import { Link } from "expo-router";
import DiceCard from "../../components/DiceCard";
import PersonalDiceCard from "../../components/PersonalDiceCard";
import { FontAwesome5 } from "@expo/vector-icons";
import { Themes } from "../../assets/Themes";
import { DICE_DATA } from "../../assets/Themes/Dice";
import { UserContext } from "../../contexts/UserContext";
import { DiceContext } from "../../contexts/DiceContext";

const windowWidth = Dimensions.get("window").width;

export default function Page() {
  const { user, fetchSavedDiceFromUid, fetchUserFromUid } = useContext(UserContext);
  const { fetchDiceFromDiceId } = useContext(DiceContext);

  const [diceIds, setDiceIds] = useState([]);
  const [diceData, setDiceData] = useState([]);

  useEffect(() => {
    if (user) {
      const fetchDiceIds = async () => {
        try {
          let result = await fetchSavedDiceFromUid(user.uid);
          console.log("result: ", result);
          if (result) {
            setDiceIds(result);
          }
        } catch (error) {
          console.error('Failed to fetch saved dice:', error);
        }
      };
      fetchDiceIds();
      // if (diceIds) {
      //   const fetchDiceData = async () => {
      //     // let fetchedDiceData = [];
      //     // for (let i = 0; i < diceIds.length; i++) {
      //     //   console.log("diceIds[i] ", diceIds[i]);
      //     //   const dice = await fetchDiceFromDiceId(diceIds[i]);
      //     //   console.log("DICE ", i, ": ", dice);
      //     // }

      //     const fetchedDiceData = await Promise.all(
      //       diceIds.map(async (diceId) => {
      //         const dice = await fetchDiceFromDiceId(diceId);
      //         return dice;
      //       })
      //     );
      //     setDiceData(fetchedDiceData);
      //   };
      //   fetchDiceData().catch(console.error);
      // }
    }
  }, [user]);

  useEffect(() => {
    if (diceIds) {
      const fetchDiceData = async () => {
        const fetchedDiceData = await Promise.all(
          diceIds.map(async (diceId) => {
            const dice = await fetchDiceFromDiceId(diceId);
            return dice;
          })
        );
        // console.log("fetched dice data: ", fetchedDiceData);
        setDiceData(fetchedDiceData);
      };
      fetchDiceData().catch(console.error);
    }
  }, [diceIds]);

  const addDice = [{}];
  const dataList = [...diceData, ...addDice];

  return (
    <View style={styles.container}>
      <Header title="My Dice" />
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructionsText}>
          Choose a dice to roll and make a decision.
        </Text>
      </View>
      <FlatList

        data={dataList}
        numColumns={2}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (

          <TouchableOpacity style={{ margin: 5 }}>
            {(index !== dataList.length - 1) ? (
               <Link
               href={{
                 pathname: `/roll/roll`,
                 params: item ? { // Check if item.id exists
                   name: item.name,
                   choices: item.choices,
                   numRolled: item.rollHistory,
                   numSaved: item.saves,
                   username: item.creator,
                   img: item.imageUri,
                   id: item.id,
                   diceId: item.diceId,
                 } : {},
               }}
             >
                <PersonalDiceCard
                  imageUri={item ? item.imageUri : ""}
                  title={item ? item.name : ""}
                />
              </Link>
            ) : (
              <Link
                href={{
                  pathname: `/roll/createNewDice`,
                }}
              >
                <View style={styles.createDiceContainer}>
                  <FontAwesome5
                    name="plus"
                    size={45}
                    color={Themes.colors.salmon}
                  />
                  <Text style={styles.createDiceText}>Create new dice</Text>
                </View>
              </Link>
            )}
          </TouchableOpacity>
        )}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  instructionsContainer: {
    height: 40,
    width: windowWidth - windowWidth * 0.1,
    marginTop: 15,
    alignItems: "left",
    justifyContent: "center",
  },
  instructionsText: {
    fontFamily: "Poppins-Regular",
    fontSize: 14,
  },
  createDiceContainer: {
    width: windowWidth / 2 - windowWidth * 0.05,
    borderRadius: 20,
    // height: 250,
    height: 150,
    borderWidth: 1,
    borderColor: Themes.colors.mediumGray,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  createDiceText: {
    fontFamily: "Poppins-Regular",
    color: Themes.colors.darkGray,
    fontSize: 14,
    marginTop: 10,
  },
});
