import { View, Text, StyleSheet, Image} from "react-native";
import { Themes } from "../assets/Themes";
import Fire from "./Icons/Fire";
import Kudos from "./Icons/Kudos";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Stats({ index, statContent }) {
  const diceImage = statContent[0];
  const iconType = statContent[1];
  const stat = statContent[2];
  const description1 = statContent[3];
  const description2 = statContent[4];

  let iconComponent = <FontAwesome5 name="dice-five" size={50} color={Themes.colors.salmon} />;
  switch (iconType) {
    case "fire":
      iconComponent = <Fire width={44} height={57} />;
      break;
    case "dice":
      iconComponent = <FontAwesome5 name="dice-two" size={50} color={Themes.colors.salmon} />
      break;
    case "cat":
      iconComponent = <FontAwesome5 name="cat" size={50} color={Themes.colors.salmon} />
      break;
    case "star":
      iconComponent = <FontAwesome5 name="star" size={50} color={Themes.colors.salmon} />
      break;
    case "kudos":
      iconComponent = <Kudos size={50} color={Themes.colors.salmon} />
      break;
    case "celeb":
      iconComponent = <FontAwesome5 name="camera-retro" size={50} color={Themes.colors.salmon} />
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
          {/* <FontAwesome5 name="dice-five" size={50} color={Themes.colors.salmon} /> */}
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
    height: 400,
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
    borderRadius: 30,
    borderWidth: 6,
    borderColor: Themes.colors.salmon,
    justifyContent: "center",
    alignItems: "center"
  },
  circleText: {
    fontSize: 40,
    fontFamily: "Poppins-Bold"
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

