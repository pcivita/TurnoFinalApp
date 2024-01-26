import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Stack } from "expo-router";
import { Themes } from "../../assets/Themes";
import { useState, useContext, useEffect } from "react";
import Activity from "../../components/Activity";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { useFonts } from "expo-font";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ActivityHelpModal from "../../components/ActivityHelpModal";
import { useLocalSearchParams } from "expo-router";

export default function Page() {
  // const [activities, setActivities] = useState([]);

  // const params = useLocalSearchParams();
  // useEffect(() => {
  //   if (params) {
  //     console.log(params);
  //     const arr = params.activities.split(',')
  //     setActivities(arr);
  //   }
  // }, [params])


  const [isHelpModalVisible, setIsHelpModalVisible] = useState(false);
  const { activities } = useContext(ActivitiesContext);
  const currentActivities = activities;
  console.log(activities);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  const closeHelpModal = () => {
    setIsHelpModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <Header title="Activities" />
      <View style={styles.helpButton}>
        <Text style={styles.headerText}>Stanford Study Spots</Text>
        <TouchableOpacity onPress={() => setIsHelpModalVisible(true)}>
          <MaterialCommunityIcons
            name="help-circle-outline"
            size={28}
            color="black"
          />
          <ActivityHelpModal
            isModalVisible={isHelpModalVisible}
            closeHelpModal={closeHelpModal}
          />
        </TouchableOpacity>
      </View>
      {currentActivities == [] && (
        <View style={styles.noActivitiesContainer}>
          <Text style={styles.noActivitesMessage}>
            {section.noActivitiesMessage}
          </Text>
        </View>
      )}
      {currentActivities && (
        <ScrollView style={styles.activitiesContainer}>
          <View style={styles.activitiesRow}>
            <Activity activityObject={currentActivities[0]} index={1} />
            <Activity activityObject={currentActivities[1]} index={2} />
          </View>
          <View style={styles.activitiesRow}>
            <Activity activityObject={currentActivities[2]} index={3} />
            <Activity activityObject={currentActivities[3]} index={4} />
          </View>
          <View style={styles.activitiesRow}>
            <Activity activityObject={currentActivities[4]} index={5} />
            <Activity activityObject={currentActivities[5]} index={6} />
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Themes.colors.background,
  },
  sectionList: {
    width: "90%",
    flex: 1,
  },
  flatList: {
    width: "90%",
    flex: 1,
  },
  createActivityContainer: {
    flex: 0.09,
    justifyContent: "center",
    alignItems: "center",
  },
  createActivityButton: {
    backgroundColor: Themes.colors.salmon,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  createActivityText: {
    paddingHorizontal: 10,
    color: "white",
    fontSize: 22,
    fontFamily: "Poppins-Regular",
  },
  header: {
    backgroundColor: "white",
    fontSize: 18,
    height: 30,
    fontFamily: "Poppins-Bold",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  noActivitiesContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Themes.colors.lightGray,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 15,
    padding: 10,
    height: 110,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  activitiesContainer: {
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 4,
    flexDirection: "space-between",
    gap: 100,
  },
  activitiesRow: {
    width: "100%",
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  helpButton: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Poppins-Regular",
    fontSize: 20,
  },
});
