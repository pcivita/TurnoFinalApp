import { StyleSheet, Text, View, Button, SectionList, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { router, Link, Stack, useLocalSearchParams } from "expo-router";
import { Themes } from "../../assets/Themes";
import { useState, useEffect, useContext } from "react";
import Activity from "../../components/Activity";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { useFonts } from "expo-font";
import Header from "../../components/Header";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ActivityHelpModal from "../../components/ActivityHelpModal";

export default function Page() {
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
    setIsHelpModalVisible(false)
  }
  
  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{ headerShown: false }}
      />
      <Header title="Activities" />
      <View style={styles.helpButton}>
        <TouchableOpacity onPress={() => setIsHelpModalVisible(true)}>
          <MaterialCommunityIcons 
            name="help-circle" 
            size={30} 
            color={Themes.colors.darkGray}
          />
          <ActivityHelpModal isModalVisible={isHelpModalVisible} closeHelpModal={closeHelpModal} />
        </TouchableOpacity>
      </View>
      {currentActivities == [] &&
        <View style={styles.noActivitiesContainer}>
          <Text style={styles.noActivitesMessage}>
            {section.noActivitiesMessage}
          </Text>
        </View>
      }
      {currentActivities &&
        <View style={styles.activitiesContainer}>
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
        </View>
      }
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
    // padding: 10,
    // gap: 16,
  },
  flatList: {
    width: "90%",
    flex: 1,
    // padding: 10,
    // gap: 16,
  },
  createActivityContainer: {
    flex: 0.09,
    justifyContent: "center",
    alignItems: "center",
  },
  createActivityButton: {
    // flex: 1,
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5, // Android shadow
  },
  activitiesContainer: {
    width: "100%",
    // height: "60%",
    padding: 20,
    flexDirection: "space-between",
    gap: 20,
  },
  activitiesRow: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  helpButton: {
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
