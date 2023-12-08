import { Text, View, StyleSheet } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../DiceComponent";
import { FontAwesome5 } from "@expo/vector-icons";
import { useContext, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withSpring,
  withRepeat,
  useAnimatedGestureHandler,
  runOnJS,
} from "react-native-reanimated";
import Header from "../Header";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";

export default function RollDice({ onData, canRoll }) {
  const [appearHeader, setAppearHeader] = useState(false);
  const handleData = (data) => {
    // Process the data
    onData(data);
    setAppearHeader(true);
    headerBounce();
    //setActiveScreen("CompleteDice"); TODO IMPORTANT
  };
  const headerBounce = () => {
    progress.value = withSpring(130);
  };

  const progress = useSharedValue(0);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: progress.value }],
    };
  }, []);

  const { activities } = useContext(ActivitiesContext);
  console.log("length " + activities.length);

  return (
    <View style={styles.screenContainer}>
      <Header title="Roll" />
      {canRoll ?
        <View>
          <View styles={styles.upperTextContainer}>
            <Text style={styles.upperText}> Roll the dice for an Activity! </Text>
          </View>
          <DiceComponent style={styles.Dice} onData={handleData} />
        </View>
       :
        <View styles={styles.upperTextContainer}>
          <Text style={styles.upperText}> Add at least one more activity to get started! </Text>
        </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: Themes.colors.background,
    gap: 30,
    width: "100%",
    alignSelf: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    height: 110,
    paddingTop: 45,
    alignItems: "center",
    justifyContent: "space-around",
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
  title: {
    fontSize: 32,
    color: "white",
    fontFamily: "Poppins-Bold",
  },

  upperTextContainer: {
    width: 30,

    borderWidth: 5,
  },
  upperText: {
    color: "black",
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    zIndex: -100,
  },
  square: {
    color: "red",
    width: "100%",
    height: 100,
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 10,
  },
});
