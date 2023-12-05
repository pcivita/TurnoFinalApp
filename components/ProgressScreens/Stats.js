import { View, Text, StyleSheet, ScrollView, SafeAreaView, FlatList, Dimensions} from "react-native";
import ActivityCircle from "../ActivityCircle";
import StatsCard from "../StatsCard"
import { Themes } from "../../assets/Themes";

export default function Stats() {
  const statsContent = [
    [
      Images.diceIcons.one, "fire", 10, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.two, "fire", 2, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.three, "fire", 5, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.four, "fire", 5, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.five, "fire", 5, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.six, "fire", 5, "You're on Fire!", "Here is your streak of completing activities"
    ],
  ];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statsContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        snapToAlignment="start"
        decelerationRate={"fast"} 
        // snapToInterval={Dimensions.get("window").width - 65} 
        snapToInterval={310 + 20} 
        renderItem={({item, index}) => 
          <StatsCard style={styles.statsCard} index={index} statContent={statsContent[index]}/>
        }
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Adjust the width as needed
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   width: "100%",
  //   height: "90%",
  //   backgroundColor: Themes.colors.salmon,
  //   flex: 1,
  //   flexDirection: "row",
  //   justifyContent: "center",
  //   alignItems: "center"
  // },
  container: {
    // width: "100%",
    height: "90%",
    // backgroundColor: Themes.colors.salmon,

    //flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
