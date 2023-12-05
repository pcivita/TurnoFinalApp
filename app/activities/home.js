import { StyleSheet, Text, View, Button, SectionList, Modal } from "react-native";
import { router, Link, Stack, useLocalSearchParams } from "expo-router";
import { Themes } from "../../assets/Themes";
import { useState, useEffect, useContext } from "react";
import Activity from "../../components/Activity";
import { ActivitiesContext } from "../../contexts/ActivitiesContext";
import { useFonts } from "expo-font";

export default function Page() {
  const { activities } = useContext(ActivitiesContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../assets/Poppins/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../assets/Poppins/Poppins-Bold.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: "My Activities",
          headerStyle: {
            backgroundColor: Themes.colors.lightGray, // Set the header background color
            fontFamily: "Poppins-Regular"
          },
          headerShown: true,
        }}
      />
      <SectionList
        sections={activities}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item, index, section }) => (
          <Activity
            activityObject={item}
            index={index + 1}
            section={section.title}
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
        showsVerticalScrollIndicator={false}
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
  },
  sectionList: {
    flex: 1,
    width: "100%",
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
    fontFamily: "Poppins-Regular",
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
});
