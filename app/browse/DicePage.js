import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  router,
  Stack,
  useLocalSearchParams,
  useSearchParams,
} from "expo-router";
import Header from "../../components/Header";
import { Themes } from "../../assets/Themes";
import Activity from "../../components/Activity";

export default function DicePage() {
  const params = useLocalSearchParams();

  const [currentDice, setCurrentDice] = useState(null);
  const [activities, setActivities] = useState([]);

  const handleImageSource = (index) => {
    switch (index) {
      case 0:
        return require("../../assets/Themes/Images/diceIcons/diceOne.png");
      case 1:
        return require("../../assets/Themes/Images/diceIcons/diceTwo.png");
      case 2:
        return require("../../assets/Themes/Images/diceIcons/diceThree.png");
      case 3:
        return require("../../assets/Themes/Images/diceIcons/diceFour.png");
      case 4:
        return require("../../assets/Themes/Images/diceIcons/diceFive.png");
      case 5:
        return require("../../assets/Themes/Images/diceIcons/diceSix.png");
      default:
        return require("../../assets/Themes/Images/diceIcons/diceOne.png");
    }
  };
  const handleAdd = () => {
    router.replace("/roll");
  };
  useEffect(() => {
    if (params) {
      console.log("dice page", params);
      const arr = params.activities.split(",");
      setActivities(arr);

      // const currentDice = DATA.find(dice => dice.id === params.itemId)
    }
  }, [params]);

  // Function to chunk the activities into pairs
  const chunkActivities = (activities, size) => {
    return activities.reduce((acc, curr, i) => {
      if (!(i % size)) {
        acc.push([curr]); // Start a new chunk
      } else {
        acc[acc.length - 1].push(curr); // Add to the last chunk
      }
      return acc;
    }, []);
  };

  const activitiesPairs = chunkActivities(activities, 2);

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Browse" />
      {params && (
        // <View style={styles.titleContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{params.title}</Text>
          <View style={styles.profile}>
            <Image source={params.profilePic} style={styles.profilePic} />
            <Text style={styles.profileText}>By @{params.username}</Text>
          </View>
        </View>
        // </View>
      )}
      {/* <View style={{alignItems: 'center', width: '100%'}}> */}
      {/* <FlatList
        data={activities}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={styles.activityWrapper}>
            <Activity activityObject={item} index={index + 1} />
          </View>
          // <View style={styles.activityBox}>
          //   <Image source={handleImageSource(index)} style={{width: 50, height: 50}} />
          //   <Text style={styles.boxText}>{item}</Text>
          // </View>
        )}
        keyExtractor={item => item}
        contentContainerStyle={styles.listContentContainer}
        ListFooterComponent={
          <TouchableOpacity style={styles.addToDiceButton} onPress={handleAdd}>
          <Text style={styles.addToDiceText}>Add to My Dice</Text>
        </TouchableOpacity>
        }
      /> */}
      <ScrollView style={styles.listContentContainer}>
        {activitiesPairs.map((pair, index) => (
          <View key={index} style={styles.activitiesRow}>
            {pair.map((activity, idx) => (
              <Activity
                key={idx}
                activityObject={activity}
                index={idx + 1 + index * 2}
              />
            ))}
          </View>
        ))}
        <TouchableOpacity style={styles.addToDiceButton} onPress={handleAdd}>
          <Text style={styles.addToDiceText}>Add to My Dice</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Themes.colors.background,
    width: "100%",
    alignItems: "center",
  },
  titleContainer: {
    width: "90%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // paddingTop: 20,
    // marginBottom: 12,
  },
  addToDiceButton: {
    backgroundColor: Themes.colors.salmon,
    width: 340,
    marginTop: 12,
    height: 40,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  addToDiceText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    color: "white",
  },
  headerText: {
    fontFamily: "Poppins-Bold",
    fontSize: 24,
    marginTop: 30,
    marginBottom: 24,
  },
  titleText: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    marginTop: 10,
    fontWeight: "700",
    alignItems: "center",
    textAlign: "center",
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileText: { 
    fontSize: 12,
    fontFamily: "Poppins-Regular"
  },
  boxText: {
    fontFamily: "Poppins-Bold",
    fontSize: 16,
    marginTop: 10,
    alignItems: "center",
    textAlign: "center",
    color: "white",
  },
  activityBox: {
    alignItems: "center",
    width: 140,
    height: 140,
    backgroundColor: Themes.colors.salmonLight,
    borderRadius: 5,
    padding: 16,
    margin: 8, // added space between elements
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 999,
    marginRight: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  listContentContainer: {
    // justifyContent: 'center', // centers the items in FlatList
    // alignItems: 'center',

    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: "space-between",
    gap: 100,
  },

  activitiesRow: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activityWrapper: {
    width: "50%",
  },
});
