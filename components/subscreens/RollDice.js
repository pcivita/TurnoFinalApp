import { Text, View, StyleSheet } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../DiceComponent";

export default function RollDice({ onData }) {
  return (
    <View style={styles.screenContainer}>
      <View styles={styles.upperTextContainer}>
        <Text style={styles.upperText}>Roll the dice for an Activity! </Text>
      </View>
      <DiceComponent style={styles.Dice} onData={onData} />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 100,
    gap: 20,
    // borderWidth: 2,
  },
  upperTextContainer: {
    width: 30,

    borderWidth: 5,
  },
  upperText: {
    color: Themes.colors.background,
    fontSize: 32,
    fontFamily: "Poppins-Bold",
    textAlign: "center",
  },
});
