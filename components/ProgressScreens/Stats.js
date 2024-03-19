import { View, StyleSheet, SafeAreaView, FlatList, Animated } from "react-native";
import StatsCard from "../StatsCard"
import { Themes } from "../../assets/Themes";
import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Stats() {
  const {user, fetchUserFromUid} = useContext(UserContext)
  const [userData, setUserData] = useState({});
  const [stats, setStats] = useState({});


  useEffect(() => {
    const fetchUserData = async (uid) => {
      let result = await fetchUserFromUid(uid);
      setUserData(result);
      setStats({
        streak: calculateStreak(result.rollHistory),
        numRolled: result.rollHistory.length,
        topActivity: findTopActivity(result.rollHistory),
        numTopActivity: findNumTopActivity(result.rollHistory),
      });
    }

    if (user) {
      fetchUserData(user.uid);
    }
  }, [user])

  const calculateStreak = (rollHistory) => {
    let streak = 0;
    let today = new Date();
    let yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    for (let i = rollHistory.length - 1; i >= 0; i--) {
      let rollDate = new Date(rollHistory[i].date);
      if (rollDate.toDateString() === today.toDateString()) {
        streak++;
        today.setDate(today.getDate() - 1);
      } else if (rollDate.toDateString() === yesterday.toDateString()) {
        yesterday.setDate(yesterday.getDate() - 1);
      } else {
        break;
      }
    }
    return streak;
  }

  const findTopActivity = (rollHistory) => {
    return "Relax"
  }

  const findNumTopActivity = (rollHistory) => {
    return 5
  }
  

  const statsContent = [
    [
      Images.diceIcons.one, "fire", stats.streak, "You're on Fire!", "Congrats on your 10 day streak"
    ],
    [
      Images.diceIcons.two, "dice", stats.numRolled, "You've come a long way!", `You have rolled the dice ${stats.numRolled} times`
    ],
    [
      Images.diceIcons.three, "cat", stats.numTopActivity, "You're chillin'!", `So far, you've completed 5 activities labeled as '${stats.topActivity}'`
    ],
    [
      Images.diceIcons.four, "star", 82, "You're a star!", "You have received 82 kudos"
    ],
    [
      Images.diceIcons.five, "kudos", 96, "You're so kind!", "You have given 96 kudos"
    ],
    [
      Images.diceIcons.six, "celeb", 100, "Okay, celeb!", "You have made 100 posts"
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
    height: "90%",
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
  },
  dots: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Themes.colors.mediumGray,
    marginHorizontal: 3,
  }
});
