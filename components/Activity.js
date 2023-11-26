import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Themes } from "../assets/Themes";
import { AntDesign } from '@expo/vector-icons';

export default function Activity({ activityName, index, section, changeSection }) {
  const sectionColor =
    (section === "Current Activities") ? styles.currentActivity : styles.pendingActivity;
  const textColor =
    (section === "Current Activities") ? styles.currentText : styles.pendingText;
  const diceContainerColor =
    (section === "Current Activities") ? styles.currentDiceContainer : styles.pendingDiceContainer;
  const diceNumberColor = 
    (section === "Current Activities") ? styles.currentDiceNumber : styles.pendingDiceNumber;
  const plusMinus = 
    (section === "Current Activities") ? {name: "downcircle", color: "white" } : {name: "upcircle", color: "black" };

  const handleChangeSection = () => {
    changeSection(activityName, section);
  }
  
  return (
    <View>
      <View style={[styles.container, sectionColor]}>
        <View style={styles.leftOfContainer}>
          {section === "Current Activities" &&
            <View style={[styles.diceContainer, diceContainerColor]}>
              <Text style={diceNumberColor}> {index} </Text>
            </View>
          }
          <Text style={[styles.text, textColor]}> {activityName} </Text>
        </View>
        <TouchableOpacity style={styles.rightOfContainer} onPress={handleChangeSection}>
          <AntDesign name={plusMinus.name} size={24} color={plusMinus.color} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    marginVertical: 5,
    height: 60,
  },
  leftOfContainer: {
    flexDirection: "row",
    alignItems: "center",
    left: 10
  },
  rightOfContainer: {
    right: 10
  },
  currentActivity: {
    backgroundColor: Themes.colors.salmon,
  },
  pendingActivity: {
    backgroundColor: Themes.colors.salmonLight,
  },
  text: {
    fontSize: 20,
  },
  currentText: {
    color: 'white',
  },
  pendingText: {
    color: 'black',
  },
  diceContainer: {
    backgroundColor: 'white',
    width: 40,
    height: 40,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    backgroundColor: 'white',
  },
  currentDiceContainer: {
    backgroundColor: 'white',
  },
  pendingDiceContainer: {
    backgroundColor: 'transparent',
  },
  currentDiceNumber: {
    color: Themes.colors.salmon,
    fontWeight: 'bold',
    fontSize: 20,
  },
  pendingDiceNumber: {
    color: Themes.colors.salmonLight,
  }
});
