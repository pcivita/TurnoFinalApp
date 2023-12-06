import { Text, View, StyleSheet } from "react-native";
import { Themes } from "../../assets/Themes";
import DiceComponent from "../DiceComponent";
import { FontAwesome5 } from "@expo/vector-icons";

export default function RollDice({ onData }) {
  return (
    <View style={styles.screenContainer}>
      <View style={styles.header}>
        <View style={styles.banner}>
          <FontAwesome5
            name="dice-five"
            style={styles.headerDice}
            size={30}
            color={"white"}
            transform={[{ rotate: "45deg" }]}
          />
          <Text style={styles.title}>Roll</Text>
          <FontAwesome5
            name="cog"
            style={styles.headerDice}
            size={30}
            color={"white"}
            transform={[{ rotate: "45deg" }]}
          />
        </View>
      </View>
      <View styles={styles.upperTextContainer}>
        <Text style={styles.upperText}> Roll the dice for an Activity! </Text>
      </View>
      <DiceComponent style={styles.Dice} onData={onData} />
    </View>
  );
}

const styles = StyleSheet.create({
  // screenContainer: {
  //   flex: 1,
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  //   marginTop: 100,
  //   gap: 20,
  //   // borderWidth: 2,
  // },
  screenContainer: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    backgroundColor: Themes.colors.blue,
    gap: 30,
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
  },



});
