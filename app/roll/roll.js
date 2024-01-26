import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Themes } from "../../assets/Themes";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import RollDice from "../../components/ProgressScreens/RollDice";
import ActivityRolled from "../../components/ActivityRolled";
import { InProgressContext } from "../../contexts/InProgressContext";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring, runOnJS } from "react-native-reanimated";
import { InProgressProvider } from "../../contexts/InProgressContext";
import Header from "../../components/Header";
import SwipeButton from "../../components/SwipeButton";
import CongratsModal from "../../components/CongratsModal";
import DiceComponent from "../../components/DiceComponent";
import { createMultiStyleIconSet } from "@expo/vector-icons";
import { useLocalSearchParams, useSearchParams } from "expo-router";

export default function Page() {
  const { canRoll } = useContext(ActivitiesContext);
  const [currentDice, setCurrentDice] = useState(null)
  const [activities, setActivities] = useState([])

  const params = useLocalSearchParams()

  useEffect(() => {
    if (params) {
      // console.log(params);
      const arr = params.activities.split(',')
      setActivities(arr)
    }
  }, [params])

  

  const [diceRolled, setDiceRolled] = useState(false);
  // const [diceKey, setDiceKey] = useState(0);

  const handleRoll = (data) => {
    setDiceNum(data[0]);
    const random1to6 = Math.floor(Math.random() * 6) + 1;
    setActivityName(activities[random1to6])

    bannerProgress.value = 0;
    swipeProgress.value = 0;
    
    setDiceRolled(true);
    //startAnimation();
    headerBounce();
    swipeButtonBounce();
    setModalVisible(false);
    console.log("Roll handled, isInteractive should change");
    // setDiceKey(prevKey => prevKey + 1);
  };


  const progress = useSharedValue(1);
  const rStyle = useAnimatedStyle(() => {
    return {
      // opacity: progress.value,
    };
  }, []);

  const { flipProgress } = useContext(InProgressContext);
  const [activeScreen, setActiveScreen] = useState("RollDice");
  const [diceNum, setDiceNum] = useState(-1);
  const [activityName, setActivityName] = useState("");
  const startAnimation = () => {
    // Wait for 1.5 seconds (1500 milliseconds) before starting the animation
    setTimeout(() => {
      progress.value = withTiming(
        0,
        {
          duration: 500, // Animation duration
        },
        (isFinished) => {
          runOnJS(setActiveScreen)("CompleteDice");
          if (isFinished) {
            progress.value = withTiming(1, {
              duration: 1000, // Animation duration
            });
            runOnJS(flipProgress)(); // Sets Activity in Progress
          }
        }
      );
    }, 1500);
  };

  let bannerProgress = useSharedValue(0);
  const headerBounce = () => {
    bannerProgress.value = withSpring(130);
  };
  const bannerAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: bannerProgress.value }],
    };
  }, []);


  let swipeProgress = useSharedValue(0);
  const swipeButtonBounce = () => {
    swipeProgress.value = withSpring(-130);
  };
  const swipeAnimation = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: swipeProgress.value }],
    };
  }, []);

  const [swipeComplete, setSwipeComplete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);


  const onSwipe = () => {
    if (diceRolled && !isModalVisible) {
      setModalVisible(true);
    }
  }

  const toggleModal = () => {
    setModalVisible(true);
    // setSwipeComplete(false);
  }

  return (
    <InProgressProvider>
      <Header title="Roll" dice={params} />

      {diceRolled && (
        <Animated.View style={[styles.square, bannerAnimation]}>
          <ActivityRolled diceNum={diceNum} activityName={activityName} />
        </Animated.View>
      )}

      <View style={styles.upperTextContainer}>
        <Text style={styles.heading1}>Roll the dice for</Text>
        <Text style={styles.heading1}>an activity!</Text>
        <Text style={styles.heading2}>Dice: {params && params.title}</Text>
      
        <DiceComponent 
          onData={handleRoll} 
          isInteractive={!diceRolled} 
        />
      </View>

      {diceRolled && (
        <Animated.View style={[styles.square2, swipeAnimation]}>
          <SwipeButton onToggle={onSwipe}/>
          <CongratsModal
            activityName={activityName}
            activityIndex={diceNum}
            isModalVisible={isModalVisible}
            setModalVisible={toggleModal}
            switchEnabled={switchEnabled}
            setSwitchEnabled={setSwitchEnabled}
            setDiceRolled={setDiceRolled}
            setSwipeComplete={setSwipeComplete}
            diceName={params && params.title}
          />
        </Animated.View>
      )}
    </InProgressProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    height: "14%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: Themes.colors.salmon,
  },
  banner: {
    paddingHorizontal: 20,
    // borderWidth: 2,
    // borderColor: "blue",
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerDice: {
    // borderWidth: 2,
  },
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins-Bold",
  },
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  subscreenContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  competeDice: {},
  square: {
    color: "red",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
  },
  upperTextContainer: {
    width: "100%",
    marginVertical: 20,
  },
  heading1: {
    color: "black",
    fontSize: 26,
    lineHeight: 30,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    // zIndex: -100,
  },
  heading2: {
    color: "black",
    fontSize: 16,
    lineHeight: 30,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    // zIndex: -100,
  },
});
