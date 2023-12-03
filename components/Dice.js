import { View, StyleSheet, Text } from "react-native";

export default function Dice() {
  return (
    <View style={styles.container}>
      {/* <View style={styles.faceFront}> </View>
      <View style={styles.faceBack}> </View>
      <View style={styles.faceTop}> </View>
      <View style={styles.faceBottom}> </View>
      <View style={styles.faceRight}> </View>
      <View style={styles.faceLeft}> </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#b33951",
  },
});
