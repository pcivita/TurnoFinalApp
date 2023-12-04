import { StyleSheet, Text, View, Button } from "react-native";
import { Themes } from "../../assets/Themes";
import { Link } from "expo-router";

import Dice from "../../components/Dice";

export default function Page() {

  const handleDiceRoll = () => {
    
  };

  return (
    <View style={styles.container}>
      <Text>This is the roll page</Text>
      <Dice style={styles.dice}/>
      <Button title="Rotate" onPress={handleDiceRoll} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: Themes.colors.background,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
    backgroundColor: "blue",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  dice: {
    width: 300,
    height: "10%",
    // borderWidth: 2,
    // borderColor: "red",
  },
});
