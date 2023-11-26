import { StyleSheet, Text, View, Button, SectionList } from "react-native";
import { router, Link, Stack, useLocalSearchParams } from "expo-router";
import { Themes } from "../../assets/Themes";
import { useState, useEffect, useContext } from "react";
import Activity from "../../components/Activity";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";

export default function Page() {
  const [DATA, setDATA] = useState([
    {
      title: "Current Activities",
      data: ["Read", "Write", "Have Fun", "Soccer", "Meditate", "Yoga"],
      noActivitiesMessage:
        "You have no Current Activities. Add activities from the Pending Activities section to use your dice!",
    },
    {
      title: "Pending Activities",
      data: [
        "Pending",
        "Pending",
        "Pending",
        "Pending",
        "Pending",
        "Pending",
        "Pending",
      ],
      noActivitiesMessage:
        "You have no Pending Activities. If you ever have ideas for future activities you want to do, use the Create Activity button to create them!",
    },
  ]);

  const handleChangeSection = (activityName, currentSection) => {
    let sectionIndex = currentSection === "Current Activities" ? 0 : 1;
    let targetSectionIndex = currentSection === "Current Activities" ? 1 : 0;

    const activityIndex = DATA[sectionIndex].data.indexOf(activityName);
    if (activityIndex != -1) {
      // Checks for case when there are already 6 activities, so pending activity can't move
      let canChangeSection =
        targetSectionIndex !== 0 || DATA[0].data.length < 6;
      if (canChangeSection) {
        // Remove activity from current section
        let updatedData = [...DATA];
        updatedData[sectionIndex].data.splice(activityIndex, 1);

        // Add activity to other section
        if (targetSectionIndex == 0) {
          updatedData[targetSectionIndex].data.push(activityName); // Add to bottom of current
        } else {
          updatedData[targetSectionIndex].data.unshift(activityName); // Add to top of pending
        }
        setDATA(updatedData);
      }
    } else {
      // Error message
      console.log("error");
    }
  };

  const { activities } = useContext(ActivitiesContext);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My Activities",
          headerShown: true,
        }}
      />
      <SectionList
        sections={activities}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <Activity
            activityName={item}
            index={index + 1}
            section={section.title}
            changeSection={handleChangeSection}
          />
        )}
        renderSectionHeader={({ section }) => (
          <View>
            <Text style={styles.header}>{section.title}</Text>
            {(section.data.length === 0 || !section.data) && (
              <View style={styles.noActivitiesContainer}>
                <Text style={styles.noActivitesMessage}>
                  {section.noActivitiesMessage}
                </Text>
              </View>
            )}
          </View>
        )}
        style={styles.sectionList}
      />
      <Link
        style={styles.createActivityContainer}
        href={{
          pathname: "/activities/createActivity",
          params: {
            user: "Alan",
          },
        }}
      >
        <View style={styles.createActivityButton}>
          <Text style={styles.createActivityText}> Create Activity</Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    backgroundColor: "white",
    gap: 16,
    padding: "10%",
    // marginVertical: 5
  },
  sectionList: {
    flex: 1,
    width: "100%",
  },
  createActivityContainer: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  createActivityButton: {
    flex: 1,
    backgroundColor: Themes.colors.salmon,
    paddingVertical: 10, // Adds padding inside the button, making it thicker
    paddingHorizontal: 30, // Adds padding on the sides, making the button wider
    borderRadius: 30, // This will give the button rounded corners
    justifyContent: "center", // Center the text horizontally
    alignItems: "center", // Center the text vertically
    overflow: "hidden", // Ensures no child can go outside the button boundaries
  },
  createActivityText: {
    paddingHorizontal: 10,
    color: "white",
    fontSize: "24",
  },
  header: {
    backgroundColor: "white",
    fontSize: 20,
    height: 30,
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
    height: 90,
  },
});
