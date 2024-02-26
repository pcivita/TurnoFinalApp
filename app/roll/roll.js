import React, { useState, useContext, useEffect } from "react";
import { StyleSheet, View, Text, TouchableWithoutFeedback } from "react-native";
import { Themes } from "../../assets/Themes";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import RollDice from "../../components/ProgressScreens/RollDice";
import ActivityRolled from "../../components/ActivityRolled";
import { InProgressContext } from "../../contexts/InProgressContext";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { InProgressProvider } from "../../contexts/InProgressContext";
import Header from "../../components/Header";
import SwipeButton from "../../components/SwipeButton";
import CongratsModal from "../../components/CongratsModal";
import DiceComponent from "../../components/DiceComponent";
import { useLocalSearchParams, useSearchParams } from "expo-router";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ZigZagArrow from "../../components/Icons/ZigZagArrow";
import { FontAwesome5 } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function Page() {
  const [currentDice, setCurrentDice] = useState(null);

  const [choices, setChoices] = useState([]);
  const [canRoll, setCanRoll] = useState(true);

  const params = useLocalSearchParams();

  useEffect(() => {
    if (params) {
      const arr = params.choices.split(",");
      console.log(arr);
      setChoices(arr);
      if (arr.length < 2) {
        setCanRoll(false);
      } else {
        setCanRoll(true);
      }
    }
  }, [params]);


  const [diceRolled, setDiceRolled] = useState(false);
  // const [diceKey, setDiceKey] = useState(0);

  const handleRoll = (data) => {
    setDiceNum(data[0]);
    const randomInt = Math.floor(Math.random() * arr.length);
    // const random1to6 = Math.floor(Math.random() * 6) + 1;
    setChoiceName(choices[randomInt]);

    bannerProgress.value = 0;
    swipeProgress.value = 0;

    setDiceRolled(true);
    //startAnimation();
    headerBounce();
    swipeButtonBounce();
    setModalVisible(false);
    // console.log("Roll handled, isInteractive should change");

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
  const [choiceName, setChoiceName] = useState("");
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
  };

  const toggleModal = () => {
    setModalVisible(true);
    // setSwipeComplete(false);
  };

  const [showOverlay, setShowOverlay] = useState(true);

  return (
    <InProgressProvider>
      {showOverlay && canRoll && (
        <TouchableWithoutFeedback onPress={() => setShowOverlay(false)}>
          <View style={styles.overlayContainer}>
            <View style={styles.overlayContent}>
              <Text style={styles.overlayTopText}>Swipe to roll the dice</Text>
              <View style={styles.overlaySwipe}>
                <ZigZagArrow />
                <MaterialCommunityIcons
                  name="cursor-pointer"
                  size={50}
                  color="white"
                />
              </View>
              <Text style={styles.overlayBottomText}>
                Tap anywhere to continue
              </Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      )}

      <Header title="Roll" dice={params} />

      {diceRolled && (
        <Animated.View style={[styles.square, bannerAnimation]}>
          <ActivityRolled diceNum={diceNum} activityName={choiceName} />
        </Animated.View>
      )}
      {canRoll ? ( 
        <View style={styles.upperTextContainer}>
          <Text style={styles.heading1}>Roll the dice to</Text>
          <Text style={styles.heading1}>make a choice!</Text>
          <View style={styles.subtitle}>
            <FontAwesome5 name="dice-d6" size={18} color="black" />
            <Text style={styles.heading2}>{params && params.name}</Text>
          </View>
          <DiceComponent onData={handleRoll} isInteractive={!diceRolled} />
        </View>
      ) : (
        <View style={styles.upperTextContainer}>
          <Text style={styles.heading1}>You don't have enough</Text>
          <Text style={styles.heading1}>choices on your dice.</Text>
          <Text style={styles.heading1}>Add more to roll!</Text>
          <View style={styles.subtitle}>
            <FontAwesome5 name="dice-d6" size={18} color="black" />
            <Text style={styles.heading2}>{params && params.name}</Text>
          </View>
          <View style={styles.editDiceContainer}>
            <Link 
              href={{ 
                pathname: "/activities", 
                params: {
                  // diceItem: dice
                  // title: dice.title,
                  // numRolled: dice.numRolled,
                  // numSaved: dice.numSaved,
                  // user: dice.user,
                  // username: dice.user.username,
                  // profilePic: dice.user.profilePic,
                  // img: dice.img,
                  // id: dice.id,
                  // activities: dice.activities,
                }
              }} 
            >
              <View style={styles.editDiceButton}>
                <Text style={styles.editDiceText}>Edit dice</Text>
              </View>
            </Link>
           </View>
        </View>
      )}
      {diceRolled && (
        <Animated.View style={[styles.square2, swipeAnimation]}>
          <SwipeButton onToggle={onSwipe} />
          <CongratsModal
            activityName={choiceName}
            activityIndex={diceNum}
            isModalVisible={isModalVisible}
            setModalVisible={toggleModal}
            switchEnabled={switchEnabled}
            setSwitchEnabled={setSwitchEnabled}
            setDiceRolled={setDiceRolled}
            setSwipeComplete={setSwipeComplete}
            setShowOverlay={setShowOverlay}
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
    marginVertical: 30,
  },
  heading1: {
    color: "black",
    fontSize: 24,
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
  subtitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    paddingTop: 5,
  },
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 100,
  },
  overlayContent: {
    alignItems: "center",
    width: "60%",
    height: "100%",
    // backgroundColor: "green"
  },
  overlayTopText: {
    color: "white",
    fontFamily: "Poppins-Regular",
    fontSize: 32,
    textAlign: "center",
    position: "absolute",
    top: 240,
  },
  overlaySwipe: {
    alignItems: "center",
    position: "absolute",
    top: 415,
  },
  overlayBottomText: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    position: "absolute",
    bottom: 15,
  },
  // TODO: DESIGN THIS
  editDiceContainer: {
    height: "65%",
    alignItems: "center",
    justifyContent: "center",
  },
  editDiceButton: {
    backgroundColor: Themes.colors.salmon,
    height: 50,
    width: 300,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center"
  },
    editDiceText: {
      color: "white",
      fontFamily: "Poppins-Bold",
      fontSize: 18,
  }
});
