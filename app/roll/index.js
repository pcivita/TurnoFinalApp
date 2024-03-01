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
import { LinearGradient } from 'expo-linear-gradient';

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
        numColumns={1}
        // keyExtractor={(item) => item.id}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => (

          <TouchableOpacity style={{ margin: 5 }}>
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
                  subText={item ? item.description : ""}
                />
              </Link>
              
          </TouchableOpacity>
        )}
      /> 
      
      <View style={styles.shadowContainer}>
      {/* <Link
        href={{
          pathname: `/roll/createNewDice`,
        }}
      > */}
        <LinearGradient 
          colors={[Themes.colors.salmon, Themes.colors.mango]}
          style={styles.createDiceContainer}
          start={[0,0]}
          end={[1,1]}
          locations={[0.5,0.8]}
        >
            <FontAwesome5
              name="plus"
              size={45}
              color={'white'}
            />
        </LinearGradient>
        {/* </Link> */}
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
  shadowContainer: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,  
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  createDiceContainer: {
    borderRadius: 50,
    flex: 1,
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  createDiceText: {
    fontFamily: "Poppins-Regular",
    color: Themes.colors.darkGray,
    fontSize: 14,
    marginTop: 10,
  },
});
