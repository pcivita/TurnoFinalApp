import { View, StyleSheet, SafeAreaView, FlatList, Animated } from "react-native";
import StatsCard from "../StatsCard"
import { Themes } from "../../assets/Themes";
import { useRef } from "react";

export default function Stats() {
  const statsContent = [
    [
      Images.diceIcons.one, "fire", 10, "You're on Fire!", "Here is your streak of completing activities"
    ],
    [
      Images.diceIcons.two, "fire", 34, "You've come a long way!", "Here is the number of times you have rolled the dice"
    ],
    [
      Images.diceIcons.three, "fire", 5, "You're chillin'!", "So far, you've completed 5 activities labeled as 'Relax'"
    ],
    [
      Images.diceIcons.four, "fire", 82, "You're a star!", "You have beeen given 82 kudos by your friends"
    ],
    [
      Images.diceIcons.five, "fire", 96, "You're so kind!", "You have given 96 kudos to your beloved friends"
    ],
    [
      Images.diceIcons.six, "fire", 5, "Okay, celeb!", "You've made 100 posts"
    ],
  ];

  const scrollHorizontal = useRef(new Animated.Value(0)).current;
  const handleScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            x: scrollHorizontal,
          },
        },
      },
    ],
    {
      useNativeDriver: false,
    }
  );

  const width = 310 + 20;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={statsContent}
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={310 + 20} 
        onScroll={handleScroll}
        renderItem={({item, index}) => 
          <StatsCard style={styles.statsCard} index={index} statContent={statsContent[index]}/>
        }
        ItemSeparatorComponent={() => <View style={{ width: 20 }} />} // Adjust the width as needed
      />
      <View style={styles.dots}>
        {statsContent.map((_, index) => {
          const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
          const dotWidth = scrollHorizontal.interpolate({
            inputRange, outputRange: [8, 25, 8], extrapolate: "clamp" 
          });
          return (
            <Animated.View 
              key={index.toString()} 
              style={[styles.dot, {width: dotWidth}]} 
            />
          )
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 20,

    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
  },
  dots: {
    position: "absolute",
    bottom: 75,
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Themes.colors.mediumGray,
    marginHorizontal: 3,
  }
});
