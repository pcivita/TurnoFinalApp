import { View, Text, StyleSheet, Image} from "react-native";
import { Themes } from "../assets/Themes";
import Fire from "./Icons/Fire";

export default function Stats({ index, statContent }) {
  const diceImage = statContent[0];
  const iconType = statContent[1];
  const stat = statContent[2];
  const description1 = statContent[3];
  const description2 = statContent[4];

  let iconComponent;
  switch (iconType) {
    case "fire":
      iconComponent = <Fire />;
      break;
    default:
      iconComponent = null;
      break;
  }

  let additionalStyle;
  switch (index) {
    case 0:
      additionalStyle = styles.firstStatsCard;
      break;
    case 5:
      additionalStyle = styles.lastStatsCard;
      break;
  }

  return (
    <View style={[styles.container, additionalStyle]}>
      <View style={styles.statCard}>
        <Image
          source={diceImage}
          style={styles.diceNumberIcon}
        />
        <View style={styles.circle}>
          {iconComponent}
          <Text style={styles.circleText}>x{stat}</Text>
        </View>
        <Text style={styles.description1}>{description1}</Text>
        <Text style={styles.description2}>{description2}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // width: 310,
    height: 420,
    alignItems: "center"
  },
  statCard: {
    width: 310,
    flex: 1,
    // height: 450,
    // backgroundColor: Themes.colors.salmon,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "black",
    padding: 8,
    alignItems: "center",
    gap: 20,
    backgroundColor: "white"
  },
  firstStatsCard: {
    marginLeft: 41,
  },
  lastStatsCard: {
    marginRight: 41,
  },
  diceNumberIcon: {
    // flex: 1,
    width: 70,
    height: undefined,
    aspectRatio: 1,
  },
  circle: {
    width: 180,
    height: undefined,
    aspectRatio: 1,
    borderRadius: 90,
    borderWidth: 6,
    borderColor: Themes.colors.salmonLight,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    fontSize: 40,
  },
  description1: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  description2: {
    fontSize: 15,
    lineHeight: 25,
    textAlign: "center",
    marginTop: -10
  }
});

