import React, { useState, useContext } from "react";
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

export default function Page() {
  const { canRoll } = useContext(ActivitiesContext);

  const [diceRolled, setDiceRolled] = useState(false);

  const handleRoll = (data) => {
    console.log(data);
    setDiceNum(data[0]);
    setActivityName(data[1][0]);
    
    setDiceRolled(true);
    //startAnimation();
    headerBounce();
    swipeButtonBounce();
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
            runOnJS(flipProgress)(); //Sets Activity in Progress
          }
        }
      );
    }, 1500);
  };


  const headerBounce = () => {
    progress2.value = withSpring(130);
  };
  const progress2 = useSharedValue(0);
  const rStyle2 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: progress2.value }],
    };
  }, []);


  const swipeButtonBounce = () => {
    progress3.value = withSpring(-130);
  };
  const progress3 = useSharedValue(0);
  const rStyle3 = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: progress3.value }],
    };
  }, []);

  const [swipeComplete, setSwipeComplete] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [switchEnabled, setSwitchEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  // const onSwipe = () => {
  //   setSwipeComplete((prevSwipeComplete) => {
  //     //console.log("before: " + prevSwipeComplete);
  //     if (!prevSwipeComplete) {
  //       // Only setModalVisible if the swipe was incomplete
  //       setModalVisible(true);
  //     }
  //     //console.log(prevSwipeComplete);
  //     return !prevSwipeComplete; // Toggle the state
  //   });
  // };

  const onSwipe = () => {
    setModalVisible(!isModalVisible);
  }
  

  const toggleModal = () => {
    setModalVisible(true);
    setSwipeComplete(false);
  }


  //TODO: Dice shouldn't be clickable after rolling
  return (
    <InProgressProvider>
      <Header title="Roll" />

      {diceRolled && (
        <Animated.View style={[styles.square, rStyle2]}>
          <ActivityRolled diceNum={diceNum} activityName={activityName} />
        </Animated.View>
      )}
     
      {/* <Animated.View style={styles.container}> */}

        {/* <RollDice 
          onData={handleRoll} 
          canRoll={canRoll} 
          diceRolled={diceRolled} 
          setDiceRolled={setDiceRolled} 

        /> */}
        <View style={styles.upperTextContainer}>
          <Text style={styles.heading1}>Roll the dice for</Text>
          <Text style={styles.heading1}>an activity!</Text>
          <Text style={styles.heading2}>Dice: Night Time Activities</Text>
       
          <DiceComponent onData={handleRoll} isInteractive={!diceRolled}/>
        </View>
      {/* </Animated.View> */}

      {diceRolled && (
        <Animated.View style={[styles.square2, rStyle3]}>
          <SwipeButton onToggle={onSwipe}/>
          <CongratsModal
            activityName={activityName}
            activityIndex={diceNum}
            isModalVisible={isModalVisible}
            setModalVisible={toggleModal}
            switchEnabled={switchEnabled}
            setSwitchEnabled={setSwitchEnabled}
            setActiveScreen={setActiveScreen}
            setAppearHeader={setDiceRolled}
            setDiceRolled={setDiceRolled}
            setSwipeComplete={setSwipeComplete}
          />
        </Animated.View>
      )}
    </InProgressProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    // height: "100%",
    // alignItems: "center",
    // justifyContent: "flex-start",
    // flex: 1,
  },
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
